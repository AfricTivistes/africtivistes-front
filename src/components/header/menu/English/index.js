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
                return (
                <li className="nav-item" key={index}>
                    {item.path.startsWith("http") ? (
                        <a href={item.path} target="_blank" rel="noopener noreferrer">
                            {correctedLabel}
                        </a>
                    ) : (
                        <Link activeClassName={'active'} to={item.path}>
                            {correctedLabel}
                        </Link>
                    )}
                    {item.children && item.children.length > 0 && (
                        <ul className="sub-menu">
                            {item.children.map((childItem, childIndex) => {
                                // Correction du texte "CONTIBUTIONS" en "CONTRIBUTIONS" pour les sous-menus aussi
                                const correctedChildLabel = childItem.label === "CONTIBUTIONS" ? "CONTRIBUTIONS" : childItem.label
                                return (
                                <li key={childIndex}>
                                    {childItem.path.startsWith("http") ? (
                                        <a href={childItem.path} target="_blank" rel="noopener noreferrer">
                                            {correctedChildLabel}
                                        </a>
                                    ) : (
                                        <Link to={childItem.path}>
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