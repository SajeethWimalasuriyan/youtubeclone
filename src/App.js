import React, { useState } from "react";
import "./App.css";
import { SearchBar, VideoList, VideoDetail } from "./components";
import youtube from "./api/youtube";
import Comments from "./components/Comments";
import InitialInterface from "./components/InitialInterface";
export default () => {
  const [videos, setVideos] = useState([]);
  const [comm, setComm] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [search, setSearch] = useState(false);
  const [scom, setScom] = useState(false);
  const [prev, setPrev] = useState(true);
  var currentId = "";

  return (
    <div>
      {!search ? (
        <InitialInterface
          onSubmit={handleSubmit}
          clickTrend={trending}
          removeBar={setSearch}
        ></InitialInterface>
      ) : (
        <div></div>
      )}

      {search ? (
        <div className="Grid">
          <div className="video">
            <SearchBar onSubmit={handleSubmit} clickTrend={trending} />
          </div>
          <div className="aux">
            <VideoDetail
              video={selectedVideo}
              refreshCom={ran}
              curr={prev}
              currf={setPrev}
            />
            {scom ? (
              <div>
                <button className="showComments" onClick={showComments}>
                  Hide Comments
                </button>
                <Comments comment={comm} />
              </div>
            ) : (
              <button className="showComments" onClick={showComments}>
                Show Comments
              </button>
            )}
          </div>
          <div className="recom">
            <VideoList
              videos={videos}
              onVideoSelect={setSelectedVideo}
              refreshCom={setScom}
            />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
  function showComments() {
    setScom(!scom);
    CommentGenerator();
  }
  async function CommentGenerator() {
    const {
      data: { items: zim }
    } = await youtube.get("commentThreads?", {
      params: {
        key: "AIzaSyD9u2_TRh7s7_E1Cbvk9tIqqdVG3um6Yu4",
        textFormat: "plainText",
        part: "snippet",
        videoId: currentId,
        maxResults: 100
      }
    });

    setComm(zim);
  }

  function ran(id, previd) {
    currentId = id;
    if (id !== previd) {
      currentId = id;
      CommentGenerator();
    }
  }

  async function trending() {
    const {
      data: { items: videos }
    } = await youtube.get("videos?", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        regionCode: "CA",
        maxResults: 50,
        key: "AIzaSyD9u2_TRh7s7_E1Cbvk9tIqqdVG3um6Yu4"
      }
    });

    setVideos(videos);
    setSelectedVideo(videos[0]);
    currentId = videos[0].id;
  }
  async function handleSubmit(searchTerm) {
    const {
      data: { items: videos }
    } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 50,
        key: "AIzaSyD9u2_TRh7s7_E1Cbvk9tIqqdVG3um6Yu4",
        q: searchTerm
      }
    });

    setVideos(videos);
    setSelectedVideo(videos[21]);
    currentId = videos[0].id.videoId;
  }
};

