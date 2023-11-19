import React, { useState } from "react";
import CommentSection from "./CommentSection";

function ViewsAndLikes({ video }) {
  const [upVotes, setUpVotes] = useState(video.upvotes);
  const [donwVotes, setDownVotes] = useState(video.downvotes);

  function handleUpVotes() {
    // setUpVotes(upVotes)
    console.log("clicked", upVotes);
    setUpVotes(upVotes + 1);
  }

  function handleDownVotes() {
    console.log("clicked", donwVotes);
    setDownVotes(donwVotes - 1);
  }

  return (
    <div>
      <h2>{video.title}</h2>
      <p>
        {video.views} Views | Uploaded {video.created}
      </p>
      <span>
        <button onClick={handleUpVotes}>{upVotes} 👍🏾</button>
        <button onClick={handleDownVotes}>{donwVotes} 👎🏾</button>
      </span>
      <CommentSection video={video} />
    </div>
  );
}

export default ViewsAndLikes;
