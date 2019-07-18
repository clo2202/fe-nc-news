import React from "react";

const SortBy = ({ sortBy }) => {
  return (
    <div className='sortby'>
      <p>Sort by:</p>
      <button onClick={() => sortBy("comment_count")}>Popular</button>
      <button onClick={() => sortBy()}>Recent</button>
      <button onClick={() => sortBy("votes")}>Rated</button>
    </div>
  );
};

export default SortBy;
