import React from 'react';

const AddComment = ({handleCommentChange, handleCommentSubmit, body}) => {
    return (
        <form onSubmit={handleCommentSubmit}>
            <label htmlFor='body'></label>
            <input type='text' id="body" onChange={handleCommentChange}/>
            <button type='submit'>Add Comment</button>
        </form>
    );
};

export default AddComment;