import React from 'react'
import SingleBlog from './single-blog'

const NosChampions = ({ posts}) => {
    return (
<section id="blog-list" className="pt-25 pb-25">
    <div className="container-fluid px-4"> {/* Changed to container-fluid with padding for more width */}
        <div className="row justify-content-center">
            <div className="col-lg-11"> {/* Increased width from 10 to 11 */}
                <div className="row">
                    <div className="col-lg-12">
                        <SingleBlog posts={posts}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    )
}

export default NosChampions
