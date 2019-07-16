import React, { Component } from "react";
import * as api from "../utils/api";
import Comments from "./Comments";
import AddComment from "./AddComment";

class ArticlePage extends Component {
  state = {
    article: {},
    comments: [],
    newComment: {
      body: "",
      author: ""
    }
  };

  render() {
    const { article, comments } = this.state;
    return (
      <section className="article">
        <h3>{article.title}</h3>
        <h4>Topic: {article.topic}</h4>
        <h5>Posted by: {article.author}</h5>
        <p>{article.body}</p>
        <AddComment
          handleCommentChange={this.handleCommentChange}
          handleCommentSubmit={this.handleCommentSubmit}
        />
        <Comments comments={comments} />
      </section>
    );
  }

  componentDidMount = () => {
    this.fetchArticleById();
    this.fetchCommentsByArticleId();
  };

  fetchArticleById = async () => {
    const { article_id } = this.props;
    const article = await api.getArticleById(article_id);
    this.setState({ article });
  };

  fetchCommentsByArticleId = async () => {
    const { article_id } = this.props;
    const comments = await api.getCommentsbyArticle(article_id);
    this.setState({ comments });
  };

  componentDidUpdate = (prevProps, prevState) => {
    const newComment = prevState.newComment !== this.state.newComment;
    if (newComment) {
        this.fetchCommentsByArticleId()
    }
  }

  handleCommentChange = event => {
    const { value, id } = event.target;
    this.setState({ newComment: { [id]: value, author: 'jessjelly' } });
  };

  handleCommentSubmit = async event => {
    event.preventDefault();
    const { article_id } = this.props;
    const { newComment } = this.state;
    const addedComment = await api.postComment(article_id, newComment)
    this.setState({newComment: {addedComment}})
  };

}

export default ArticlePage;
