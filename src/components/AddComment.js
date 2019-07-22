import React, { Component } from "react";
import * as api from "../utils/api";

class AddComment extends Component {
  state = {
    body: "",
    author: "jessjelly"
  };

  render() {
    return (
      <form className='add-comment' onSubmit={this.handleSubmit}>
        <label htmlFor="body" />
        <input
          type="text"
          id="body"
          onChange={this.handleChange}
          value={this.state.body}
          placeholder='Add a comment...'
          required
        />
        <button type="submit">Post</button>
      </form>
    );
  }

  handleChange = event => {
    const { value, id } = event.target;
    this.setState({ [id]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newComment = this.state;
    const { article_id, refreshComments } = this.props;
    api.postComment(article_id, newComment).then(comment => {
      refreshComments(comment);
    });
    this.setState({ body: "" });
  };
}

export default AddComment;
