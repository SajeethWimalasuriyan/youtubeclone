import React from "react";
import CommentItem from "./CommentItem";
import "../Styles/CommentList.css";

export default ({ comment }) => {
  const listOfVideos = comment.map((
    individualComment 
  ) => <CommentItem com={individualComment} />);

  return (
    <section className="commentSection">
      <h3>Comments:</h3>

      {listOfVideos}
    </section>
  );
};

