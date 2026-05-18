import React from 'react'
import { getImage } from "gatsby-plugin-image"
import { GatsbyImageSafe } from "../../../utils/gatsby-image-safe"
import {injectIntl } from "gatsby-plugin-react-intl"

const SingleTestimonial = ({post}) => {
    const{title, excerpt, featuredImage}=post.node
    const image = featuredImage && getImage(featuredImage.node.big)

    return (
    <div className="single-testimonial mt-35">
            <div className="testimonial-content">
            <p className="mt-15 mb-15" dangerouslySetInnerHTML={{ __html: excerpt.substring(0, 65) }}/>...
            </div>
            <div className="testimonial-author">
            <div className="author-image">
                <a 
                > <GatsbyImageSafe image={image} alt={title}/></a>
                    </div>
                <div className="author-name">
                <a
                className="mt-40"><h6>{title}</h6></a>
                </div>
            </div>
            </div>
    )
}

export default injectIntl(SingleTestimonial)
