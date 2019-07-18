import React, { Component } from "react";
import * as api from "../utils/api";
import Comments from "./Comments";
import { navigate } from "@reach/router";

class ArticlePage extends Component {
  state = {
    article: {}
  };

  render() {
    const { article } = this.state;
    const { article_id } = this.props;
    return (
      <section className="article">
        <h3>{article.title}</h3>
        <h4>Topic: {article.topic}</h4>
        <h5>Posted by: {article.author}</h5>
        <p>{article.body}</p>
        <Comments article_id={article_id} />
      </section>
    );
  }

  componentDidMount = () => {
    this.fetchArticleById();
  };

  fetchArticleById = async () => {
    const { article_id } = this.props;
    api
      .getArticleById(article_id)
      .then(article => {
        this.setState({ article });
      })
      .catch(err => {
        navigate("/error", {
          replace: true,
          state: { displayErr: "Sorry, that article does not exist" }
        });
      });
  };
}

export default ArticlePage;
