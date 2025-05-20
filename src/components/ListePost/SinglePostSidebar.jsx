import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {injectIntl } from "gatsby-plugin-react-intl"

const getPublicLink = (link) => link.replace(/^https?:\/\/update\.africtivistes\.org/, '/fr');

const SinglePost = ({post}) => {
    const{title, date,link, featuredImage}=post.node
    const image = featuredImage && getImage(featuredImage.node.small)
    return (
        <ul style={{listStyleType: 'none'}}>
            <li>
                <a href={getPublicLink(link)} aria-label={`Lire l'article : ${title}`}>
                    <span class="single-post mt-30">
                        <span class="image">
                        <GatsbyImage image={image} alt={title} />
                        </span>
                        <span class="content pl-85">
                            <h6>{title.substring(0, 40)}...</h6>
                            <span><i class="flaticon-calendar"></i>{date}</span>
                        </span>
                    </span> 
                </a> 
            </li>
        </ul>
    )
}

export default injectIntl(SinglePost)
