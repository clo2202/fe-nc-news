import React, { Component } from "react";
import * as api from "../utils/api";
import Comments from "./Comments";
import { navigate } from "@reach/router";
import "../styles/Articles.css";
import '../styles/Comments.css';
import moment from 'moment';

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
          <p className="loading-msg">Loading...</p>
        ) : (
          <div>
            <h1>{article.title}</h1>
            <h4>Topic: {article.topic}</h4>
            <h5>Posted by: {article.author} <span className='date'>{moment(`${article.created_at}`).format("MMM Do YY")}</span></h5>
            <p className="article-body">{article.body}</p>
            <Comments article_id={article_id} />
          </div>
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
