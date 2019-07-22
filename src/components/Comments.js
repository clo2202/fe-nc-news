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
    const { article_id, user } = this.props;
    return (
      <div>
        <AddComment
          refreshComments={this.refreshComments}
          article_id={article_id}
          user={user}
        />
        <CommentList user={user} comments={comments} removeComment={this.removeComment} />
      </div>
    );
  }

  componentDidMount = () => {
    this.fetchCommentsByArticleId();
  };

  fetchCommentsByArticleId = async () => {
    const { article_id } = this.props;
    const comments = await api.getCommentsbyArticle(article_id);
    this.setState({ comments });
  };

  removeComment = comment_id => {
    api.deleteComment(comment_id).then(() => {
      this.fetchCommentsByArticleId()
    });
  };

  refreshComments = newComment => {
    const { comments } = this.state;
    this.setState({ comments: [newComment, ...comments] });
  };

  // componentDidUpdate = (prevProps, prevState) => {
  //   const newComment = prevState.comments.length !== this.state.comments.length;
  //   if (newComment) {
  //     this.fetchCommentsByArticleId();
  //   }
  // };
}

export default Comments;
