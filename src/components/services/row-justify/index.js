import React from 'react'
import {FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const getPublicLink = (link) => link.replace(/^https?:\/\/update\.africtivistes\.org/, '/fr');

const RowJustify = ({post}) => {
    const{title, date, link,excerpt, featuredImage}=post.node
    const image = featuredImage && getImage(featuredImage.node.localFile)
    return (
        
<div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="singel-services text-center mt-45">
                        <div className="icon mb-30">
                            <GatsbyImage image={image} alt={title} />
                        </div>
                        <div className="content">
                            <a href="services-details.html"><h4>{title}</h4></a>
                            <p className="mt-20" dangerouslySetInnerHTML={{ __html: excerpt.substring(0, 250)}}/>
                        </div>
                        <div className="date-details">
                <span className="date"><a href="# " aria-label="button">{date}</a></span>
                <span className="details"><a href={getPublicLink(link)} ><FormattedMessage id="readMore"/> <i className="flaticon-right-arrow"></i></a></span>
            </div>
                    </div>
                </div>
    )
}

export default injectIntl(RowJustify)
