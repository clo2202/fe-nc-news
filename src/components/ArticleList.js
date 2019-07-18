import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../utils/api";
import "../styles/ArticleList.css";
import SortBy from "./SortBy";
import { navigate } from "@reach/router";

class ArticleList extends Component {
  state = {
    articles: []
  };

  render() {
    const { articles } = this.state;
    const { topic } = this.props;
    return (
      <section className="articles">
        {topic ? <h2>{topic} Articles</h2> : <h2>All articles</h2>}
        <SortBy sortBy={this.sortBy} />
        <ul className="articles-list">
          {articles.map(article => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      </section>
    );
  }

  componentDidMount = () => {
    this.fetchArticles();
  };

  fetchArticles = () => {
    const { topic } = this.props;
    api
      .getArticles(topic)
      .then(articles => {
        this.setState({ articles });
      })
      .catch(err => {
        navigate("/error", {
          state: { displayErr: "Sorry, that topic does not exist" }
        });
      });
  };

  sortBy = query => {
    const { topic } = this.props;
    api.getArticles(topic, query).then(articles => {
      this.setState({ articles });
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    const newTopic = prevProps.topic !== this.props.topic;
    if (newTopic) this.fetchArticles();
  };
}

export default ArticleList;
