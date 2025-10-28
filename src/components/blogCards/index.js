import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {FormattedMessage, injectIntl, useIntl } from "gatsby-plugin-react-intl"

const BlogCards = ({posts}) => {
return(
  <section id="blog-cards-home" className="blog-cards-home">
    <div className="container">
      <BlogCardGrid posts={posts}/>
    </div>
  </section>

)
}

const BlogCardGrid = ({posts}) => {
    const intl = useIntl();
    const locale = intl.locale;
    
    return (
        <div className="blog-cards-grid-home"> 
            {posts.map((post, index) => {
                const postData = post.node || post;
                const image = postData.featuredImage && getImage(postData.featuredImage.node.localFile)
                
                // Déterminer si c'est un article du blog
                const isBlogPost = postData.categories && postData.categories.nodes && postData.categories.nodes.some(cat => cat.slug === 'blog')
                
                // Utiliser le bon chemin selon la langue - inclure le préfixe de langue
                // Pour l'anglais: /en/blog-en/, pour le français: /fr/blog/
                const blogPath = locale === 'en' ? `/en/blog-en` : `/fr/blog`;
                const articleLink = isBlogPost ? `${blogPath}/${postData.slug}` : postData.link
                
                return (
                    <div key={postData.id || index} className="blog-card-home">
                        {/* Image */}
                        <a href={articleLink} className="card-image-link">
                            <div className="card-image-home">
                                {image ? (
                                    <GatsbyImage 
                                        image={image} 
                                        alt={postData.title} 
                                        className="card-img"
                                    />
                                ) : (
                                    <div className="card-image-placeholder">
                                        <i className="flaticon-image"></i>
                                    </div>
                                )}
                            </div>
                        </a>
                        
                        {/* Contenu */}
                        <div className="card-content-home">
                            {/* Catégories */}
                            {postData.categories && postData.categories.nodes && postData.categories.nodes.length > 0 && (
                                <div className="card-categories-home">
                                    {postData.categories.nodes.slice(0, 2).map((cat, catIndex) => (
                                        <span key={catIndex} className="category-tag-home">
                                            {cat.name}
                                        </span>
                                    ))}
                                </div>
                            )}
                            
                            {/* Titre */}
                            <h3 className="card-title-home">
                                <a href={articleLink}>{postData.title}</a>
                            </h3>
                            
                            {/* Métadonnées */}
                            <div className="card-meta-home">
                                {/* Date */}
                                {postData.date && (
                                    <span className="meta-date-home">
                                        <i className="flaticon-calendar"></i>
                                        {postData.date}
                                    </span>
                                )}
                                
                                {/* Auteur */}
                                {postData.author && postData.author.node && (
                                    <span className="author-info-home">
                                        <i className="flaticon-user"></i>
                                        Par {postData.author.node.name || `${postData.author.node.firstName} ${postData.author.node.lastName}`}
                                    </span>
                                )}
                            </div>
                            
                            {/* Description */}
                            {postData.excerpt && (
                                <div className="card-excerpt-home" dangerouslySetInnerHTML={{ __html: postData.excerpt }} />
                            )}
                            
                            {/* Tags */}
                            {postData.tags && postData.tags.nodes && postData.tags.nodes.length > 0 && (
                                <div className="card-tags-home">
                                    {postData.tags.nodes.slice(0, 3).map((tag, tagIndex) => (
                                        <span key={tagIndex} className="tag-item-home">
                                            <i className="flaticon-tag"></i>
                                            #{tag.name}
                                        </span>
                                    ))}
                                </div>
                            )}
                            
                            {/* Lire plus */}
                            <div className="card-read-more-home">
                                <a href={articleLink} className="read-more-btn-home">
                                    <FormattedMessage id="readMore" />
                                    <i className="flaticon-right-arrow"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                )
            })} 
        </div>
    )
}

export default injectIntl(BlogCards)

