import React, { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import * as api from "../utils/api";

class Comments extends Component {
  state = {
    comments: []
  };
  render() {
    const { comments } = this.state;
    const { article_id } = this.props;
    return (
      <div>
        <AddComment refreshComments={this.refreshComments} article_id={article_id}/>
        <CommentList comments={comments} />
      </div>
    );
  }

  componentDidMount = () => {
      this.fetchCommentsByArticleId()
  };

  fetchCommentsByArticleId = async () => {
    const { article_id } = this.props;
    const comments = await api.getCommentsbyArticle(article_id);
    this.setState({ comments });
  };

  refreshComments = () => {
      this.fetchCommentsByArticleId()
  }

  componentDidUpdate = (prevProps, prevState) => {
      const newComment = prevState.comments.length !== this.state.comments.length;
      if (newComment) {
          this.fetchCommentsByArticleId()
      }
  }
}

export default Comments;
