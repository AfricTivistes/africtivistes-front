import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"

const SinglePost = ({ post }) => {
  const { title, date, link, excerpt, featuredImage, author } = post.node ? post.node : post;
  const imageNode = featuredImage && featuredImage.node;
  const image = imageNode && (imageNode.localFile ? getImage(imageNode.localFile) : getImage(imageNode.big));

  return (
    <div className="card" style={{ transition: 'transform 0.3s ease-in-out' }}>
      
      <div className="card-img" style={{ overflow: 'hidden' }}>
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
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <span className="text-muted">
              <a>{date}</a>
            </span>
            {author && author.node && (
              <div className="text-muted small mt-1">
                <strong>Auteur:</strong> {author.node.name || `${author.node.firstName} ${author.node.lastName}`}
              </div>
            )}
          </div>
          <span className="text-muted">
            <a style={{ color: '#a63117', transition: 'color 0.3s ease-in-out' }} href={link}>
              <FormattedMessage id="readMore" /> <i className="flaticon-right-arrow"></i>
            </a>
          </span>
        </div>
      </div>
    </div>
    );
  };
  
export default injectIntl(SinglePost)
