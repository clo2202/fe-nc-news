import React, { Component } from "react";
import * as api from '../utils/api'

class AddComment extends Component {
  state = {
    body: '',
    author: "jessjelly"
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="body" />
        <input
          type="text"
          id="body"
          onChange={this.handleChange}
          value={this.state.body}
        />
        <button type="submit">Add Comment</button>
      </form>
    );
  }

  handleChange = event => {
    const { value, id } = event.target;
    this.setState({ [id]: value });
  };

  handleSubmit = async (event) => {
      event.preventDefault()
      const newComment = this.state
      const { article_id, refreshComments } = this.props
      await api.postComment(article_id, newComment)
      refreshComments()
      this.setState({body: ''}) 
  }
}

export default AddComment;
