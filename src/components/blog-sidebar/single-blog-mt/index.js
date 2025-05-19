import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FormattedMessage, injectIntl } from "gatsby-plugin-react-intl";

const getPublicLink = (link) => link.replace(/^https?:\/\/update\.africtivistes\.org/, '/fr');

const SingleBlogMt = ({ post }) => {
    const { title, date, link, excerpt, name, featuredImage } = post.node;
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
            <a href={getPublicLink(link)} className="mt-10">
                <h4>{title}</h4>
            </a>
            <p className="mt-10 mb-10" dangerouslySetInnerHTML={{ __html: excerpt }} />
            <a className="mt-10 mb-10" href={getPublicLink(link)}><FormattedMessage id ="readMore"/> <i class="fa fa-angle-right"></i></a>            </div>
    </div>
</div>

        </div>
    );
}

export default injectIntl(SingleBlogMt);
