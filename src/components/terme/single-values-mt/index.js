import React from 'react'
import {injectIntl } from "gatsby-plugin-react-intl"

const SingleValuesMt = ({post}) => {
    const{title,content}=post.node

    return (
        <div className="row justify-content-center">
        <div className="col-lg-8">
            <div className="our-history-content mt-50">
                <h3 className="mb-15">{title}</h3>
                <p  className="mb-15 " dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div>
        </div>
    )
}

export default injectIntl(SingleValuesMt)
