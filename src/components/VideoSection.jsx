import React from 'react'
import ViewsAndLikes from './ViewsAndLikes'

function VideoSection({ video }) {
  return (
    <div>
        <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
        />
        <ViewsAndLikes video={video} />
    </div>
  )
}

export default VideoSection