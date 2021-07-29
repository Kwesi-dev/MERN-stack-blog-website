import React from 'react'
import '../posts/post.css'
import PostOne from '../post/PostOne'
function Post({posts}) {
    return (
        <div className="posts">
            {posts.map((p)=>
                <PostOne post = {p}/>    
            )}
        </div>
    )
}

export default Post
