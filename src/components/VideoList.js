import React from "react";
import { Grid } from "@material-ui/core";
import VideoItem from "./VideoItem";

export default ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map((
    video //videos is a state which refers to a bunch of objects and .map automatically makes a array and goes through every element in the array cool.
  ) => (
    <VideoItem
      onVideoSelect={onVideoSelect}
      key={video.id.videoId}
      video={video}
    />
  ));

  return (
    <Grid container spacing={10}>
      {listOfVideos}
    </Grid>
  );
};

