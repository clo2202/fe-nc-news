import React from "react";

const SortBy = ({ fetchArticles }) => {
  return (
    <div>
      <p>Sort by:</p>
      <button onClick={() => fetchArticles("comment_count")}>Popular</button>
      <button onClick={() => fetchArticles()}>Recent</button>
      <button onClick={() => fetchArticles("votes")}>Rated</button>
    </div>
  );
};

export default SortBy;
