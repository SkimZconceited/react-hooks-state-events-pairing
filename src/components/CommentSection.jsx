import React, { useState } from 'react'
import Comments from './Comments'

function CommentSection( { video } ) {

    const [isTrue, setIsTrue] = useState(false)

    function handleClick() {
        setIsTrue(!isTrue)
    }
  return (
    <div>
        <button onClick={handleClick}>{isTrue ? 'Show Comments' : 'Hide Comments'}</button>
        {!isTrue ? <Comments comments={video.comments} /> : null }
    </div>
  )
}

export default CommentSection