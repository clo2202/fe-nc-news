import React, { Component } from "react";
import * as api from "../utils/api";
import Comments from "./Comments";
import { navigate } from "@reach/router";
import "../styles/Articles.css";

class ArticlePage extends Component {
  state = {
    article: {},
    isLoading: true
  };

  render() {
    const { article, isLoading } = this.state;
    const { article_id } = this.props;
    return (
      <section className="article-page">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h1>{article.title}</h1>
            <h4>Topic: {article.topic}</h4>
            <h5>Posted by: {article.author}</h5>
            <p className="article-body">{article.body}</p>
          </div>
        )}
        {isLoading ? (<p>Loading...</p>
        ) : (
        <Comments article_id={article_id} />
        )}
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
        this.setState({ article, isLoading: false });
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
