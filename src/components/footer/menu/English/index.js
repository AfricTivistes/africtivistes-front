import React from "react"
import { graphql, StaticQuery, Link } from 'gatsby'
import { IntlContextConsumer } from "gatsby-plugin-react-intl"

import { flatListToHierarchical } from '../../../../services'

const renderMenu = (data) => {
    const menu = flatListToHierarchical(data)
    return (
        <ul>
            {menu.map((item, index) => {
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
                    <Link activeClassName={'active'} to={correctedPath}>
                        {item.label}
                    </Link>
                    {item.children && item.children.length > 0 && (
                        <ul className="sub-menu">
                            {item.children.map((childItem, childIndex) => {
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
                                    <Link to={correctedChildPath}>
                                        {childItem.label}
                                    </Link>
                                </li>
                                )
                            })}
                        </ul>)
                    }
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
                      wpMenu(locations: { eq: GATSBY_FOOTER_MENU___EN }) {
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