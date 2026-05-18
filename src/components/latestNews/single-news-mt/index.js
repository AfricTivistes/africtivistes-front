import React from 'react'
import { getImage } from "gatsby-plugin-image"
import { GatsbyImageSafe } from "../../../utils/gatsby-image-safe"
import { FormattedMessage, injectIntl, useIntl } from "gatsby-plugin-react-intl"

const SingleNewsMt = ({post}) => {
    const intl = useIntl();
    const locale = intl.locale;
    const{title, date, link,excerpt, featuredImage, categories, slug}=post.node
    const image = featuredImage && getImage(featuredImage.node.localFile)
    
    const isBlogPost = categories && categories.nodes && categories.nodes.some(cat => cat.slug === 'blog')
    const blogPath = locale === 'en' ? `/en/blog-en` : `/fr/blog`;
    const articleLink = isBlogPost ? `${blogPath}/${slug}` : link

    return (
        <div className="card" style={{ transition: 'transform 0.3s ease-in-out' }}>
        <div className="card-img-top" style={{ overflow: 'hidden' }}>
          <a href={articleLink} style={{ display: 'block' }}>
            <GatsbyImageSafe image={image} alt={title} style={{ transition: 'transform 0.3s ease-in-out' }} />
          </a>
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <a style={{ color: '#000000', transition: 'color 0.3s ease-in-out' }} href={articleLink}>
              {title}
            </a>
          </h5>
          <div className="card-text" dangerouslySetInnerHTML={{ __html: excerpt }} />
        </div>
       <div className="card-footer">
          <span className="text-muted">
            <a>{date}</a>
          </span>
          <span className="text-muted float-right">
            <a style={{ color: '#a63117', transition: 'color 0.3s ease-in-out' }} href={articleLink}>
              <FormattedMessage id="readMore" /> <i className="flaticon-right-arrow"></i>
            </a>
          </span>
        </div>
      </div>
    )
}

export default injectIntl(SingleNewsMt)
