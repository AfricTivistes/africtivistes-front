import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"

const SingleProjectMt = ({post}) => {
    const{title,excerpt, date, link, featuredImage}=post.node
    const image = featuredImage && getImage(featuredImage.node.localFile)

    return (
        
      <div className="card">
                <div className="card-img-top" >
                    <a href={link}>
                        <GatsbyImage href={link} image={image} alt={title} />
                    </a>
                </div>
                <div class="card-body">
                    <h5 class="card-title">
                        <a  style={{ color: '#000000' }} href={link}>{title}</a>
                    </h5>
                    <div class="card-text" dangerouslySetInnerHTML={{ __html: excerpt.substring(0, 150) }}></div>
                </div>
                <div class="card-footer">
                            <span class="text-muted"><a>{date}</a></span>
                            <span class="text-muted float-right"><a style={{ color: '#a63117'}} href={link} ><FormattedMessage id="readMore"/> <i className="flaticon-right-arrow"></i></a></span>
                </div>
      </div>
)
}

export default injectIntl(SingleProjectMt)
