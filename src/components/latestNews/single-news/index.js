import React from 'react'
import SingleNewsMt from '../single-news-mt'

const SingleNews = ({posts}) => {
    return (
            <div className="card-deck"> 
                    {posts.map(post => {
                        return(
                            <SingleNewsMt post = {post} key={post.id} />
                            )
                    })} 
            </div>
    )
}

export default SingleNews
