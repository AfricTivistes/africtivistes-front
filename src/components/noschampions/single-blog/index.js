import React from 'react'
import SingleBogMt from '../single-blog-mt'

const SingleBlog = ({ posts}) => {
    return (
        <>
            <div className="row justify-content-center">
                {posts.map((post, index) => {
                    return(
                        <div className="col-lg-6" key={post.node.id || index}>
                            <SingleBogMt post={post} />
                        </div>
                    )
                })} 
            </div> 
        </>
    )
}

export default SingleBlog
