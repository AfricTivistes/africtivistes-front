import React from 'react'
import SingleBlog from './single-blog'

const BlogSidebar = ({ posts, numPages, currentPage}) => {
    return (
        <section id="latest-news" className="pt-30 pb-30">
        <div className="container">
                    <SingleBlog posts={posts} numPages={numPages} currentPage={currentPage} />
        </div>
        </section>
    )
}

export default BlogSidebar

