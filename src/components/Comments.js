import React from "react";

const Comments = ({ comments }) => {
    // console.log(comments)
  return (
    <div>
      <h4>{comments.length} Comments</h4>
      <ul>
        {comments.map(comment => (
          <li key={comment.comment_id}>
            <p>{comment.author}</p>
            <p>{comment.votes} votes</p>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
