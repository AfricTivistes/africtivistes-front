import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"

const getPublicLink = (link) => link.replace(/^https?:\/\/update\.africtivistes\.org/, '/fr');

const SingleProjectMt = ({post}) => {
    const{title,excerpt, date, link, featuredImage}=post.node
    const image = featuredImage && getImage(featuredImage.node.localFile)

    return (
        
      <div className="card">
                <div className="card-img-top" >
                    <a href={getPublicLink(link)}>
                        <GatsbyImage href={getPublicLink(link)} image={image} alt={title} />
                    </a>
                </div>
                <div class="card-body">
                    <h5 class="card-title">
                        <a  style={{ color: '#000000' }} href={getPublicLink(link)}>{title}</a>
                    </h5>
                    <div class="card-text" dangerouslySetInnerHTML={{ __html: excerpt.substring(0, 150) }}></div>
                </div>
                <div class="card-footer">
                            <span class="text-muted"><a>{date}</a></span>
                            {getPublicLink(link) ? (
                              <span class="text-muted float-right"><a style={{ color: '#a63117'}} href={getPublicLink(link)} ><FormattedMessage id="readMore"/> <i className="flaticon-right-arrow"></i></a></span>
                            ) : (
                              <span class="text-muted float-right"><button type="button" disabled style={{background:'none',border:'none',color:'#aaa'}}>
                                <FormattedMessage id="readMore"/> <i className="flaticon-right-arrow"></i>
                              </button></span>
                            )}
                </div>
      </div>
)
}

export default injectIntl(SingleProjectMt)
