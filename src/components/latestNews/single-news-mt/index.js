import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"

const SingleNewsMt = ({post}) => {
    const{title, date, link,excerpt, featuredImage}=post.node
    const image = featuredImage && getImage(featuredImage.node.localFile)

    return (
        <div className="card" style={{ transition: 'transform 0.3s ease-in-out' }}>
        <div className="card-img-top" style={{ overflow: 'hidden' }}>
          <a href={link} style={{ display: 'block' }}>
            <GatsbyImage href={link} image={image} alt={title} style={{ transition: 'transform 0.3s ease-in-out' }} />
          </a>
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <a style={{ color: '#000000', transition: 'color 0.3s ease-in-out' }} href={link}>
              {title}
            </a>
          </h5>
          <div className="card-text" dangerouslySetInnerHTML={{ __html: excerpt }}></div>
        </div>
       <div className="card-footer">
          <span className="text-muted">
            <a>{date}</a>
          </span>
          <span className="text-muted float-right">
            <a style={{ color: '#a63117', transition: 'color 0.3s ease-in-out' }} href={link}>
              <FormattedMessage id="readMore" /> <i className="flaticon-right-arrow"></i>
            </a>
          </span>
          
        </div>
      </div>
      
    )
}

export default injectIntl(SingleNewsMt) 
