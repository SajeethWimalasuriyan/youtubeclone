import React, { useState } from "react";
import "../Styles/VideoDetail.css";

export default ({ video, refreshCom, curr, currf }) => {
  var ending = "";
  var desc;
  const [des, setDes] = useState(true);
  if (!video) return <div>Loading...</div>;

  if (video.kind === "youtube#searchResult") {
    if (video.id.videoId !== ending) {
      ending = video.id.videoId;
      desc = video.snippet.description;
      refreshCom(ending, curr);
      currf(ending);
    }
  } else {
    desc = video.snippet.description;
    ending = video.id;
    refreshCom(ending, curr);
    currf(ending);
  }

  const videoSrc = `https://www.youtube.com/embed/${ending}`;
  function seeMore() {
    setDes(!des);
  }
  return (
    <div className="currPlaying">
      <iframe
        frameBorder="0"
        width="100%"
        height="100%"
        title="Video Player"
        src={videoSrc}
      />
      <div className="placeholder"></div>
      <h1>{video.snippet.title} </h1>
      <div className="videoInformation">
        <h2>{video.snippet.channelTitle}</h2>
        {des && video.snippet.description !== "" ? (
          <p className="videoDescription">
            <span onClick={seeMore}>Want to see the description?</span>
          </p>
        ) : (
          <p className="videoDescription">
            {desc}... <br></br>
            <br></br>
            <span onClick={seeMore}>Don't want to see the Description?</span>
          </p>
        )}
        {}
      </div>
    </div>
  );
};

