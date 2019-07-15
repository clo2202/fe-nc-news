import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../utils/api";
import "../styles/ArticleList.css";

class ArticleList extends Component {
  state = {
    articles: []
  };

  render() {
    const { articles } = this.state;
    const { topic } = this.props
    return (
      <section>  
      {topic ? <p>Articles on {topic}</p> : <p>All articles</p>} 
      <ul className='article-list'>
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

  fetchArticles = async () => {
    const { topic } = this.props;
    const articles = await api.getArticles(topic);
    this.setState({ articles });
  };

  componentDidUpdate = (prevProps, prevState) => {
    const newTopic = prevProps.topic !== this.props.topic;
    if (newTopic) {
      this.fetchArticles()
    }
  };
}

export default ArticleList;
