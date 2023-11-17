import React from 'react'
import CommentSection from './CommentSection'

function ViewsAndLikes({ video }) {
  return (
    <div>
        <h2>{video.title}</h2>
        <p>{video.views} Views | Uploaded {video.created}</p>
        <span><button>{video.upvotes} 👍🏾</button><button>{video.downvotes} 👎🏾</button></span>
        <CommentSection video={video} />
    </div>
  )
}

export default ViewsAndLikes