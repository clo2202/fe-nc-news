import React, { Component } from 'react';
import * as api from '../utils/api'

class ArticlePage extends Component {
    state = {
        article: {},
        comments: [],
        newComment: ''
    }

    render() {
        const { article } = this.state
        return (
            <section className="article">
               <h3>{article.title}</h3>
               <h4>Topic: {article.topic}</h4>
               <h5>Posted by: {article.author}</h5>
               <p>{article.body}</p>
            </section>
        );
    }

    componentDidMount = () => {
        this.fetchArticleById()
    }

    fetchArticleById = async () => {
      const {article_id} = this.props
      const article = await api.getArticleById(article_id)
      this.setState({article})
    }
}

export default ArticlePage;