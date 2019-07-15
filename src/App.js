import React, { Component } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Router } from "@reach/router";
import "../src/styles/App.css";
import Footer from "./components/Footer";
import ArticleList from "./components/ArticleList";
import * as api from "./utils/api";

class App extends Component {
  state = {
    topics: []
  };

  render() {
    const { topics } = this.state;
    return (
      <div className="App">
        <Header />
        <Nav topics={topics} />
        <Router className="main">
          <ArticleList path="/" />
          <ArticleList path="/articles/:topic" />
        </Router>
        <Footer />
      </div>
    );
  }

  componentDidMount = () => {
    this.fetchTopics();
  };

  fetchTopics = async () => {
    const topics = await api.getArticles();
    this.setState({ topics });
  };
}

export default App;
