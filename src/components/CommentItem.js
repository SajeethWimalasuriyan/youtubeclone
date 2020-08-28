import React from "react";
import "../Styles/Comment.css";
export default ({ com }) => {
  return (
    <div className="commentBox">
      <div className="commentName">
        <img
          className="commentPic"
          alt="thumbnail"
          src={com.snippet.topLevelComment.snippet.authorProfileImageUrl}
        />
        <p className="commentNameInfo">
          {com.snippet.topLevelComment.snippet.authorDisplayName}
        </p>
      </div>

      <p className="commentContent">
        {com.snippet.topLevelComment.snippet.textDisplay}
      </p>
    </div>
  );
};

