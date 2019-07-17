import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Router } from "@reach/router";
import "../src/styles/App.css";
import Footer from "./components/Footer";
import ArticleList from "./components/ArticleList";
import ArticlePage from "./components/ArticlePage";
import Error from './components/Errors'

const App = () => {
  return (
    <div className="App">
    <Header />
    <Nav />
    <Router className="main">
      <ArticleList path="/" />
      <ArticleList path="/topics/:topic" />
      <ArticlePage path="/articles/:article_id"/>
      <Error path="/*"/>
    </Router>
    <Footer />
  </div>
  );
};

export default App;

