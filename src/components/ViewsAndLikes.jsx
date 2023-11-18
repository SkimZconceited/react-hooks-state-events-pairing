import React, { useState } from "react";
import CommentSection from "./CommentSection";

function ViewsAndLikes({ video }) {
  const [upVotes, setUpVotes] = useState(video.upvotes);

  function handleUpVotes() {
    // setUpVotes(upVotes)
    console.log("clicked", upVotes);
  }

  function handleDownVotes() {
    let n = -1;
    return n--;
  }

  return (
    <div>
      <h2>{video.title}</h2>
      <p>
        {video.views} Views | Uploaded {video.created}
      </p>
      <span>
        <button onClick={handleUpVotes}>{upVotes} 👍🏾</button>
        <button onClick={handleDownVotes}>
          {video.downvotes + handleDownVotes()} 👎🏾
        </button>
      </span>
      <CommentSection video={video} />
    </div>
  );
}

export default ViewsAndLikes;
