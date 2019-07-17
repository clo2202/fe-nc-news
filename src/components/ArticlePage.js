import React, { Component } from "react";
import * as api from "../utils/api";
import Comments from "./Comments";

class ArticlePage extends Component {
  state = {
    article: {},
  };

  render() {
    const { article } = this.state;
    const { article_id } = this.props
    return (
      <section className="article">
        <h3>{article.title}</h3>
        <h4>Topic: {article.topic}</h4>
        <h5>Posted by: {article.author}</h5>
        <p>{article.body}</p>
        <Comments article_id={article_id}/>
      </section>
    );
  }

  componentDidMount = () => {
    this.fetchArticleById();
  };

  fetchArticleById = async () => {
    const { article_id } = this.props;
    const article = await api.getArticleById(article_id);
    this.setState({ article });
  };
}

export default ArticlePage;
