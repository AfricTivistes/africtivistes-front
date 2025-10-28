import React from "react"
import { graphql, StaticQuery, Link } from 'gatsby'
import { IntlContextConsumer} from "gatsby-plugin-react-intl"

import { flatListToHierarchical } from '../../../../services'

const renderMenu = (data) => {
    const menu = flatListToHierarchical(data)
    return (
        <ul className="navbar-nav">
            {menu.map((item, index) => {
                // Correction du texte "CONTIBUTIONS" en "CONTRIBUTIONS"
                const correctedLabel = item.label === "CONTIBUTIONS" ? "CONTRIBUTIONS" : item.label
                
                let correctedPath = item.path
                
                // Force le chemin pour les contributions (blog) - ne PAS inclure le préfixe de langue
                if (item.label === "CONTRIBUTIONS" || item.label === "CONTIBUTIONS" || item.label.toLowerCase().includes('contribution')) {
                    correctedPath = '/blog-en'
                } else {
                    // Nettoyer les double préfixes de langue pour les autres items
                    correctedPath = correctedPath
                        .replace(/\/en\/en\//g, '/en/')
                        .replace(/\/fr\/fr\//g, '/fr/')
                    
                    // Correction du chemin: remplacer /blog par /blog-en SEULEMENT si ce n'est pas déjà blog-en
                    if (correctedPath.includes('/blog') && !correctedPath.includes('/blog-en')) {
                        // Remplacer /blog/ par /blog-en/ et /blog à la fin par /blog-en
                        correctedPath = correctedPath.replace(/\/(blog)\//g, '/blog-en/')
                        correctedPath = correctedPath.replace(/\/(blog)$/g, '/blog-en')
                    }
                }
                return (
                <li className="nav-item" key={index}>
                    {correctedPath.startsWith("http") ? (
                        <a href={correctedPath} target="_blank" rel="noopener noreferrer">
                            {correctedLabel}
                        </a>
                    ) : (
                        <Link activeClassName={'active'} to={correctedPath}>
                            {correctedLabel}
                        </Link>
                    )}
                    {item.children && item.children.length > 0 && (
                        <ul className="sub-menu">
                            {item.children.map((childItem, childIndex) => {
                                // Correction du texte "CONTIBUTIONS" en "CONTRIBUTIONS" pour les sous-menus aussi
                                const correctedChildLabel = childItem.label === "CONTIBUTIONS" ? "CONTRIBUTIONS" : childItem.label
                                
                                let correctedChildPath = childItem.path
                                
                                // Force le chemin pour les contributions (blog) dans les sous-menus - ne PAS inclure le préfixe de langue
                                if (childItem.label === "CONTRIBUTIONS" || childItem.label === "CONTIBUTIONS" || childItem.label.toLowerCase().includes('contribution')) {
                                    correctedChildPath = '/blog-en'
                                } else {
                                    // Nettoyer les double préfixes de langue pour les autres items
                                    correctedChildPath = correctedChildPath
                                        .replace(/\/en\/en\//g, '/en/')
                                        .replace(/\/fr\/fr\//g, '/fr/')
                                    
                                    // Correction du chemin: remplacer /blog par /blog-en SEULEMENT si ce n'est pas déjà blog-en
                                    if (correctedChildPath.includes('/blog') && !correctedChildPath.includes('/blog-en')) {
                                        // Remplacer /blog/ par /blog-en/ et /blog à la fin par /blog-en
                                        correctedChildPath = correctedChildPath.replace(/\/(blog)\//g, '/blog-en/')
                                        correctedChildPath = correctedChildPath.replace(/\/(blog)$/g, '/blog-en')
                                    }
                                }
                                return (
                                <li key={childIndex}>
                                    {correctedChildPath.startsWith("http") ? (
                                        <a href={correctedChildPath} target="_blank" rel="noopener noreferrer">
                                            {correctedChildLabel}
                                        </a>
                                    ) : (
                                        <Link to={correctedChildPath}>
                                            {correctedChildLabel}
                                        </Link>
                                    )}
                                </li>
                                )
                            })}
                        </ul>
                    )}
                </li>
                )
            })}
        </ul>)
}

const English = () => {
    return (
        <IntlContextConsumer>
            {({ language: currentLocale }) => (
                currentLocale === 'en' && <StaticQuery query={graphql`
                    {
                      wpMenu(locations: { eq: GATSBY_HEADER_MENU___EN }) {
                        menuItems {
                          nodes {
                            id
                            label
                            path
                            parentId
                          }
                        }
                      }
                    }`
                }
                    render={(data) => renderMenu(data.wpMenu.menuItems.nodes)}
                />
            )}
        </IntlContextConsumer>
    )
}

export default English