import React from 'react'

function Comments({ comments }) {
  return (
    <div>
        {comments.map((comment) => (
            <div key={comment.id}>
                <h2>{comment.user}</h2>
                <p>{comment.comment}</p>
            </div>
        ))}
    </div>
  )
}

export default Comments