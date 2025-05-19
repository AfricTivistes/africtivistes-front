import React from 'react'
import {FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"
import { Link } from "gatsby"

const getPublicLink = (link) => link.replace(/^https?:\/\/update\.africtivistes\.org/, '/fr');

const SingleSliderBgcover = ({post,contacts}) => {
    const{title, link,excerpt, featuredImage}=post.node
    const image = featuredImage && featuredImage.node.localFile.childImageSharp.gatsbyImageData.images.fallback.src

    return (
<section
  id="page-banner"
  className="single-slider bg_cover d-flex align-items-center"
  style={{ backgroundImage: `url(${image})` }}
  data-overlay="7"
>
  <div className="container">
    <div className="row">
      <div className="col-lg-5">
        <div className="page-banner-content" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '20px', borderRadius: '10px' }}>
          <Link to={getPublicLink(link)}>
            <h3
              className="mb-5"
              style={{ color: '#943126', animation: 'bounceInLeft', animationDelay: '1s' }}
            >
              <span>{title}</span>
            </h3>
          </Link>
          <p
            className="mb-5"
            style={{ color: 'black', animationDelay: '1.5s' }}
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
          <a
            className="main-btn"
            style={{ animation: 'fadeInUp', animationDelay: '1.5s' }}
            href={getPublicLink(link)}
          >
            <FormattedMessage id="suite" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default injectIntl (SingleSliderBgcover)