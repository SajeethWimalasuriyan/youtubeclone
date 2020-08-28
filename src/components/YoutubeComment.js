import React from "react";

export default ({ video }) => {
  return (
    <div className="individual">
      <h1>{video.snippet.thumbnails.medium.url}</h1>
      <h1>{video.snippet.canReply} </h1>
    </div>
  );
};

