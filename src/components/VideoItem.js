import React from "react";
import "../Styles/VideoItem.css";

export default ({ video, onVideoSelect }) => {
  return (
    <div className="individual" onClick={() => onVideoSelect(video)}>
      <img
        className="thumbnail"
        alt="thumbnail"
        src={video.snippet.thumbnails.medium.url}
      />

      <p className="recName">{video.snippet.title}</p>
    </div>
  );
};

