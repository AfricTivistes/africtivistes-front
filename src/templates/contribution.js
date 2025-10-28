import React, { useState, useEffect } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FormattedMessage, useIntl } from "gatsby-plugin-react-intl";
import Layout from "../components/layout";
import Pagination from "../components/pagination";

const ContributionTemplate = ({ pageContext }) => {
    const { category, posts, totalPages, currentPage, categoryName, categoryDescription, lang } = pageContext;
    const intl = useIntl();
    // Le slug de catégorie est déjà correct depuis gatsby-node.js (blog-en pour EN, blog pour FR)
    const categorySlug = category;
    // Inclure le préfixe de langue pour les liens <a href>
    const basePath = `/${lang}/${categorySlug}/`;
    
    // État pour le filtrage par tags
    const [selectedTag, setSelectedTag] = useState(null);
    const [filteredPosts, setFilteredPosts] = useState(posts);
    const [allTags, setAllTags] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    
    // Extraire tous les tags uniques
    useEffect(() => {
        const tags = new Set();
        posts.forEach(post => {
            const postData = post.node || post;
            if (postData.tags && postData.tags.nodes) {
                postData.tags.nodes.forEach(tag => {
                    tags.add(tag);
                });
            }
        });
        setAllTags(Array.from(tags));
    }, [posts]);
    
    // Filtrer les posts selon le tag sélectionné
    useEffect(() => {
        if (selectedTag) {
            const filtered = posts.filter(post => {
                const postData = post.node || post;
                return postData.tags && postData.tags.nodes && 
                       postData.tags.nodes.some(tag => tag.slug === selectedTag.slug);
            });
            setFilteredPosts(filtered);
        } else {
            setFilteredPosts(posts);
        }
    }, [selectedTag, posts]);
    
    // Fonction pour gérer le clic sur un tag
    const handleTagClick = (tag) => {
        if (selectedTag && selectedTag.slug === tag.slug) {
            // Si le tag est déjà sélectionné, le désélectionner
            setSelectedTag(null);
        } else {
            // Sinon, sélectionner le nouveau tag
            setSelectedTag(tag);
        }
    };
    
    return (
        <Layout>
            {/* Hero Section */}
            <section className="blog-hero-simple">
                <div className="hero-background">
                    <div className="hero-overlay"></div>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="hero-content text-center">
                                <div className="hero-title">
                                    <span className="title-main">{categoryName}</span>
                                </div>
                                {categoryDescription && (
                                    <div className="hero-description">
                                        <p dangerouslySetInnerHTML={{ __html: categoryDescription }}></p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filtres par Tags - Interface Moderne */}
            {allTags.length > 0 && (
                <section className="tags-filter-section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="tags-filter-wrapper">
                                    <div className="filter-header">
                                        <h3 className="filter-title">
                                            <i className="flaticon-filter"></i>
                                            <FormattedMessage id="filterByTags" />
                                        </h3>
                                        <div className="filter-stats">
                                            <span className="total-articles">
                                                <i className="flaticon-document"></i>
                                                {posts.length} <FormattedMessage id="article" />{posts.length > 1 ? 's' : ''}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="filter-controls">
                                        <div className="filter-dropdown-wrapper">
                                            <div className="filter-dropdown">
                                                <button 
                                                    className="dropdown-trigger"
                                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                                >
                                                    <div className="trigger-content">
                                                        <i className="flaticon-tag"></i>
                                                        <span className="trigger-text">
                                                            {selectedTag ? `#${selectedTag.name}` : intl.formatMessage({ id: "allTags" })}
                                                        </span>
                                                        <span className="trigger-count">
                                                            {selectedTag ? filteredPosts.length : posts.length}
                                                        </span>
                                                    </div>
                                                    <i className={`dropdown-arrow ${dropdownOpen ? 'open' : ''}`}>
                                                        <i className="flaticon-down-arrow"></i>
                                                    </i>
                                                </button>
                                                
                                                <div className={`dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
                                                    <div className="dropdown-header">
                                                        <span className="dropdown-title"><FormattedMessage id="selectTag" /></span>
                                                        <button 
                                                            className="close-dropdown"
                                                            onClick={() => setDropdownOpen(false)}
                                                        >
                                                            <i className="flaticon-close"></i>
                                                        </button>
                                                    </div>
                                                    
                                                    <div className="dropdown-options">
                                                        <button 
                                                            className={`dropdown-option ${!selectedTag ? 'active' : ''}`}
                                                            onClick={() => {
                                                                setSelectedTag(null);
                                                                setDropdownOpen(false);
                                                            }}
                                                        >
                                                            <div className="option-content">
                                                                <i className="flaticon-grid"></i>
                                                                <span className="option-text"><FormattedMessage id="allArticles" /></span>
                                                                <span className="option-count">{posts.length}</span>
                                                            </div>
                                                        </button>
                                                        
                                                        {allTags.map((tag, index) => {
                                                            const tagPostCount = posts.filter(post => {
                                                                const postData = post.node || post;
                                                                return postData.tags && postData.tags.nodes && 
                                                                       postData.tags.nodes.some(t => t.slug === tag.slug);
                                                            }).length;
                                                            
                                                            return (
                                                                <button
                                                                    key={index}
                                                                    className={`dropdown-option ${selectedTag && selectedTag.slug === tag.slug ? 'active' : ''}`}
                                                                    onClick={() => {
                                                                        handleTagClick(tag);
                                                                        setDropdownOpen(false);
                                                                    }}
                                                                >
                                                                    <div className="option-content">
                                                                        <i className="flaticon-tag"></i>
                                                                        <span className="option-text">#{tag.name}</span>
                                                                        <span className="option-count">{tagPostCount}</span>
                                                                    </div>
                                                                </button>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {selectedTag && (
                                            <div className="active-filter">
                                                <div className="active-filter-content">
                                                    <i className="flaticon-tag"></i>
                                                    <span className="active-filter-text">#{selectedTag.name}</span>
                                                    <span className="active-filter-count">{filteredPosts.length}</span>
                                                </div>
                                                <button 
                                                    className="remove-filter-btn"
                                                    onClick={() => setSelectedTag(null)}
                                                    title={intl.formatMessage({ id: "allArticles" })}
                                                >
                                                    <i className="flaticon-refresh"></i>
                                                    <span className="btn-text"><FormattedMessage id="resetFilters" /></span>
                                                </button>
                                            </div>
                                        )}
                                        
                                        {/* Bouton de réinitialisation toujours visible */}
                                        <div className="reset-filter-section">
                                            <button 
                                                className={`reset-all-btn ${selectedTag ? 'active' : 'inactive'}`}
                                                onClick={() => setSelectedTag(null)}
                                                disabled={!selectedTag}
                                            >
                                                <i className="flaticon-refresh"></i>
                                                <span className="btn-text">
                                                    <FormattedMessage id="allArticles" />
                                                </span>
                                                <span className="btn-count">{posts.length}</span>
                                            </button>
                                        </div>
                                    </div>
                                    
                                    {selectedTag && (
                                        <div className="filter-results">
                                            <div className="results-info">
                                                <i className="flaticon-search"></i>
                                                <span className="results-text">
                                                    {filteredPosts.length} <FormattedMessage id="article" />{filteredPosts.length > 1 ? 's' : ''} found for tag "{selectedTag.name}"
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Articles Section */}
            <section className="blog-posts-modern">
                <div className="container">
                    <div className="posts-grid-modern">
                        {filteredPosts.length === 0 ? (
                            <div className="no-posts-message" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem 2rem' }}>
                                <i className="flaticon-document" style={{ fontSize: '4rem', color: '#8B0000', marginBottom: '1rem', display: 'block' }}></i>
                                <h3 style={{ fontSize: '1.5rem', color: '#2c3e50', marginBottom: '0.5rem' }}><FormattedMessage id="noArticles" /></h3>
                                <p style={{ color: '#7f8c8d', fontSize: '1rem' }}><FormattedMessage id="noArticlesFound" /></p>
                            </div>
                        ) : (
                            filteredPosts.map((post, index) => {
                                const postData = post.node || post;
                                const imageNode = postData.featuredImage && postData.featuredImage.node;
                                const image = imageNode && (imageNode.localFile ? getImage(imageNode.localFile) : getImage(imageNode.big));
                                
                                return (
                                    <article key={index} className="blog-card-modern">
                                    <div className="card-image">
                                        {image ? (
                                            <GatsbyImage 
                                                image={image} 
                                                alt={postData.title}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            />
                                        ) : (
                                            <div className="placeholder-image">
                                                <i className="flaticon-document"></i>
                                            </div>
                                        )}
                                        
                                        <div className="card-overlay">
                                            <a href={`${basePath}${postData.slug}`} className="read-more-btn">
                                                <i className="flaticon-right-arrow"></i>
                                            </a>
                                        </div>
                                        
                                        {postData.categories && postData.categories.nodes && postData.categories.nodes.length > 0 && (
                                            <div className="card-categories">
                                                {postData.categories.nodes.slice(0, 2).map((cat, catIndex) => (
                                                    <span key={catIndex} className="category-tag">
                                                        {cat.name}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    
                                    <div className="card-content">
                                    <h3 className="card-title">
                                        <a href={`${basePath}${postData.slug}`}>{postData.title}</a>
                                    </h3>
                                        
                                        <div className="card-meta">
                                            <div className="meta-left">
                                                <div className="card-date">
                                                    <i className="flaticon-calendar"></i>
                                                    <span>{postData.date}</span>
                                                </div>
                                            </div>
                                            {postData.author && postData.author.node && (
                                                <div className="author-info">
                                                    <div className="author-details">
                                                        <span className="author-label">Par</span>
                                                        <span className="author-name">{postData.author.node.name || `${postData.author.node.firstName} ${postData.author.node.lastName}`}</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        
                                        <div className="card-excerpt" dangerouslySetInnerHTML={{ __html: postData.excerpt }}></div>
                                        
                                        {postData.tags && postData.tags.nodes && postData.tags.nodes.length > 0 && (
                                            <div className="card-tags">
                                                {postData.tags.nodes.slice(0, 3).map((tag, tagIndex) => (
                                                    <button 
                                                        key={tagIndex} 
                                                        className="tag-item clickable"
                                                        onClick={() => handleTagClick(tag)}
                                                        title={`Filtrer par le tag ${tag.name}`}
                                                    >
                                                        <i className="flaticon-tag"></i>
                                                        #{tag.name}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                        
                                    <div className="read-more-btn">
                                        <a href={`${basePath}${postData.slug}`}>
                                            <FormattedMessage id="readMore" />
                                            <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </div>
                                    </div>
                                </article>
                            );
                        }))}
                    </div>
                </div>
            </section>
            
            {/* Pagination - Afficher uniquement s'il y a des articles */}
            {posts && posts.length > 0 && (
                <section className="pagination-section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <Pagination 
                                    totalPages={totalPages} 
                                    currentPage={currentPage} 
                                    basePath={basePath} 
                                />
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </Layout>
    );
};

export default ContributionTemplate;