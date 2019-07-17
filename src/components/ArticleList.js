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
    const { topic } = this.props
    return (
      <section className='articles'>  
      {topic ? <h2>Articles on {topic}</h2> : <h2>All articles</h2>} 
      <SortBy fetchArticles={this.fetchArticles}/>
      <ul className='articles-list'>
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

  fetchArticles = async (query) => {
    const { topic } = this.props;
    api.getArticles(topic, query).then((articles) => {
      this.setState({ articles });
    }).catch(err => {
      navigate('/error', {
        state: { displayErr: 'Topic not found' }
      })
    })
  };

  componentDidUpdate = (prevProps, prevState) => {
    const newTopic = prevProps.topic !== this.props.topic;
    if (newTopic) {
      this.fetchArticles()
    }
  };
}

export default ArticleList;
