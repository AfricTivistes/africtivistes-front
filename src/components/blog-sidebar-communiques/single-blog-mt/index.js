import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"

const SingleBogMt = ({ post }) => {
    const { title, date, link, excerpt, name, featuredImage, tags } = post.node;
    const image = featuredImage && getImage(featuredImage.node.big);
  
    // Assurez-vous que 'tags' existe et qu'il contient des éléments
    // const tagList = tags && tags.nodes ? tags.nodes.map(tag => tag.name) : [];
  
    const getPublicLink = (link) => link.replace(/^https?:\/\/update\.africtivistes\.org/, '/fr');
  
    return (
      <div className="single-blog mt-50">
<div className="blog-image" style={{ textAlign: 'center' }}>
  <GatsbyImage image={image} alt={title} />
</div>

        <div className="blog-content">
          <div className="date">
            <ul>
              <li>
                <a href="#">
                  <i className="flaticon-calendar"></i>{date}
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="flaticon-folder"></i>{name}
                </a>
              </li>
            </ul>
          </div>
          <div className="content">
            <a href={getPublicLink(link)} ><h4>{title}</h4></a>
            <p dangerouslySetInnerHTML={{ __html: excerpt.substring(0, 150) }} />
            <a href={getPublicLink(link)}>
              <FormattedMessage id="readMore" /> <i className="fa fa-angle-right"></i>
            </a>
            {/* {tagList.length > 0 && (
              <div className="tags-list">
                <div className="tag-buttons">
                <br></br>

                  {tagList.map((tag, index) => (
                    <button key={index} className="tag-button">{tag}</button>
                  ))}
                </div>
              </div>
            )} */}
          </div>
        </div>
      </div>
    );
  };
  
export default injectIntl(SingleBogMt)
