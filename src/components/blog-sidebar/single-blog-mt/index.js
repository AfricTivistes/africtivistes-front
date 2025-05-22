import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FormattedMessage, injectIntl } from "gatsby-plugin-react-intl";

const getPublicLink = (link) => link?.replace(/^https?:\/\/update\.africtivistes\.org/, '/fr');

const SingleBlogMt = ({ post }) => {
    const { title, link, excerpt, featuredImage, tags } = post.node;
    const image = featuredImage && getImage(featuredImage.node.big);

    return (
        <div className='single-blog-list mt-20'>
<div className="row align-items-center">
    <div className="col-xl-5 col-lg-6 text-center">
        <div className="blog-image">
            <a href={getPublicLink(link)}>
                <GatsbyImage image={image} alt={title} />
            </a>
        </div>
    </div>
    <div className="col-xl-7 col-lg-6">
        <div className="blog-content">
            {getPublicLink(link) ? (
                <a href={getPublicLink(link)}><h4>{title}</h4></a>
            ) : (
                <span><h4>{title}</h4></span>
            )}
            <p className="mt-10 mb-10" dangerouslySetInnerHTML={{ __html: excerpt }} />
            {getPublicLink(link) ? (
                <a href={getPublicLink(link)}>
                    <FormattedMessage id="readMore" /> <i className="fa fa-angle-right"></i>
                </a>
            ) : (
                <button type="button" disabled style={{background:'none',border:'none',color:'#aaa'}}>
                    <FormattedMessage id="readMore" /> <i className="fa fa-angle-right"></i>
                </button>
            )}
        </div>
    </div>
</div>

        </div>
    );
}

export default injectIntl(SingleBlogMt);
