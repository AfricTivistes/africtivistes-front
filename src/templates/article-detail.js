import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import { FormattedMessage, useIntl } from "gatsby-plugin-react-intl";
import Layout from "../components/layout";

const ArticleDetailTemplate = ({ data, pageContext }) => {
    const article = data?.allWpPost?.nodes?.[0];
    const relatedArticles = data?.allRelatedPosts?.nodes || [];
    const intl = useIntl();
    const locale = intl.locale;
    const [readingProgress, setReadingProgress] = useState(0);
    
    // Déterminer le chemin blog selon la langue - inclure le préfixe de langue
    const blogPath = locale === 'en' ? '/en/blog-en' : '/fr/blog';

    // Suivre le progrès de lecture
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            setReadingProgress(scrollPercent);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!article) {
        return (
            <Layout>
                <div className="container">
                    <h1><FormattedMessage id="articleNotFound" /></h1>
                </div>
            </Layout>
        );
    }

    // Récupération de l'image de mise en avant depuis WordPress
    const imageNode = article.featuredImage && article.featuredImage.node;
    let imageUrl = null;
    
    if (imageNode) {
        // Priorité 1: sourceUrl directe de WordPress (toujours disponible)
        if (imageNode.sourceUrl) {
            imageUrl = imageNode.sourceUrl;
        }
        // Priorité 2: publicURL (chemin public vers l'image téléchargée)
        else if (imageNode.localFile && imageNode.localFile.publicURL) {
            imageUrl = imageNode.localFile.publicURL;
        }
        // Priorité 3: base filename
        else if (imageNode.localFile && imageNode.localFile.base) {
            imageUrl = `/images/${imageNode.localFile.base}`;
        }
    }

    // Calculer le temps de lecture estimé
    const estimatedReadingTime = Math.ceil((article.content?.replace(/<[^>]*>/g, '').split(' ').length || 0) / 200);

    return (
        <Layout>
            {/* Barre de progression de lecture */}
            <div className="reading-progress-bar">
                <div 
                    className="progress-fill" 
                    style={{ width: `${readingProgress}%` }}
                ></div>
            </div>
            
            {/* Section Hero avec Image à Gauche et Infos à Droite */}
            <section className="article-hero-section">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Colonne Image */}
                        <div className="col-lg-5">
                            <div 
                                className="article-hero-image"
                                style={{
                                    backgroundImage: `url(${imageUrl})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    height: '500px',
                                    borderRadius: '15px',
                                    overflow: 'hidden',
                                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)'
                                }}
                            >
                            </div>
                        </div>

                        {/* Colonne Infos */}
                        <div className="col-lg-7">
                            <div className="article-hero-content">
                                {/* Breadcrumb */}
                                <nav className="breadcrumb-nav-hero">
                                    <a href={blogPath} className="breadcrumb-link-hero">
                                        <i className="flaticon-home"></i>
                                        <span><FormattedMessage id="category" /></span>
                                    </a>
                                    <span className="breadcrumb-separator-hero">
                                        <i className="flaticon-right-arrow"></i>
                                    </span>
                                    <span className="breadcrumb-current-hero"><FormattedMessage id="article" /></span>
                                </nav>

                                {/* Titre */}
                                <h1 className="article-title-hero">{article.title}</h1>

                                {/* Métadonnées */}
                                <div className="article-meta-hero">
                                    <span className="meta-date-hero">
                                        <i className="flaticon-calendar"></i>
                                        {article.date}
                                    </span>
                                    <span className="meta-reading-time-hero">
                                        <i className="flaticon-clock"></i>
                                        {estimatedReadingTime} <FormattedMessage id="readingTime" />
                                    </span>
                                </div>

                                {/* Auteur */}
                                {article.author && article.author.node && (
                                    <div className="author-info-hero">
                                        <i className="flaticon-user"></i>
                                        <span><FormattedMessage id="by" /> {article.author.node.name || `${article.author.node.firstName} ${article.author.node.lastName}`}</span>
                                    </div>
                                )}

                                {/* Tags */}
                                {article.tags && article.tags.nodes && article.tags.nodes.length > 0 && (
                                    <div className="article-tags-hero">
                                        {article.tags.nodes.slice(0, 4).map((tag, index) => (
                                            <span key={index} className="tag-hero">
                                                <i className="flaticon-tag"></i>
                                                #{tag.name}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contenu de l'article */}
            <section className="article-content-main">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="content-body-wrapper">
                                <div 
                                    className="article-body-content"
                                    dangerouslySetInnerHTML={{ __html: article.content }}
                                ></div>

                                {/* Tags de l'article */}
                                {article.tags && article.tags.nodes && article.tags.nodes.length > 0 && (
                                    <div className="article-tags-bottom">
                                        <h4 className="tags-bottom-title">
                                            <i className="flaticon-tag"></i>
                                            <FormattedMessage id="articleTags" />
                                        </h4>
                                        <div className="tags-bottom-list">
                                            {article.tags.nodes.map((tag, index) => (
                                                <span key={index} className="tag-bottom-item">
                                                    <i className="flaticon-tag"></i>
                                                    #{tag.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Articles liés */}
            <section className="related-articles-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="related-header-section">
                                <h2 className="related-title-section">
                                    <i className="flaticon-link"></i>
                                    <FormattedMessage id="relatedArticles" />
                                </h2>
                                <p className="related-subtitle-section">
                                    <FormattedMessage id="discoverRelated" />
                                </p>
                            </div>

                            {/* Grille des articles liés */}
                            {(() => {
                                const langCode = locale === 'en' ? 'EN' : 'FR';
                                const filteredRelated = relatedArticles.filter(r => r?.language?.code === langCode);
                                return filteredRelated.length > 0 ? (
                                <div className="related-grid-section">
                                    {filteredRelated.slice(0, 6).map((relatedArticle) => (
                                        <div key={relatedArticle.id} className="related-card">
                                            <a href={`${blogPath}/${relatedArticle.slug}`} className="related-link">
                                                {relatedArticle.featuredImage?.node?.sourceUrl ? (
                                                    <div 
                                                        className="card-image-wrapper"
                                                        style={{
                                                            backgroundImage: `url(${relatedArticle.featuredImage.node.sourceUrl})`,
                                                            backgroundSize: 'cover',
                                                            backgroundPosition: 'center',
                                                            height: '200px',
                                                            borderRadius: '10px',
                                                            overflow: 'hidden'
                                                        }}
                                                    >
                                                        <div className="card-overlay">
                                                            <span className="read-more-btn"><FormattedMessage id="readMore" /></span>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="placeholder-image">
                                                        <i className="flaticon-image"></i>
                                                    </div>
                                                )}
                                                
                                                <div className="card-content">
                                                    <h3 className="card-title">{relatedArticle.title}</h3>
                                                    <div className="card-meta">
                                                        <span className="meta-date">
                                                            <i className="flaticon-calendar"></i>
                                                            {relatedArticle.date}
                                                        </span>
                                                        {relatedArticle.author?.node && (
                                                            <span className="author-info">
                                                                <i className="flaticon-user"></i>
                                                                {relatedArticle.author.node.name}
                                                            </span>
                                                        )}
                                                    </div>
                                                    {relatedArticle.excerpt && (
                                                        <p className="card-excerpt" dangerouslySetInnerHTML={{ __html: relatedArticle.excerpt.substring(0, 100) + '...' }} />
                                                    )}
                                                    {relatedArticle.tags?.nodes && relatedArticle.tags.nodes.length > 0 && (
                                                        <div className="card-tags">
                                                            {relatedArticle.tags.nodes.slice(0, 3).map((tag, index) => (
                                                                <span key={index} className="tag-item">
                                                                    <i className="flaticon-tag"></i>
                                                                    #{tag.name}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                                ) : (
                                <div className="related-placeholder">
                                    <p>Aucun article lié pour le moment.</p>
                                </div>
                                );
                            })()}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ArticleDetailTemplate;

export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        id
        title
        slug
        date(formatString: "DD MMMM, YYYY", locale: "fr")
        excerpt
        content
        author {
          node {
            name
            firstName
            lastName
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
        tags {
          nodes {
            name
            slug
          }
        }
        featuredImage {
          node {
            altText
            sourceUrl
            localFile {
              publicURL
              absolutePath
              base
              childImageSharp {
                gatsbyImageData(
                  width: 800,
                  height: 400,
                  placeholder: DOMINANT_COLOR
                )
              }
            }
          }
        }
      }
    }
    allRelatedPosts: allWpPost(
      filter: { 
        slug: { ne: $slug }
        categories: { nodes: { elemMatch: { slug: { in: ["blog", "blog-en"] } } } }
      }
      limit: 6
    ) {
      nodes {
        id
        title
        slug
        date(formatString: "DD MMMM, YYYY", locale: "fr")
        excerpt
        author {
          node {
            name
          }
        }
        tags {
          nodes {
            name
            slug
          }
        }
        language { code }
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;
