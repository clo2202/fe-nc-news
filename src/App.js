import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Router } from "@reach/router";
import "../src/styles/App.css";
import Footer from "./components/Footer";
import ArticleList from "./components/ArticleList";

const App = () => {
  return (
    <div className="App">
    <Header />
    <Nav />
    <Router className="main">
      <ArticleList path="/" />
      <ArticleList path="/articles/:topic" />
    </Router>
    <Footer />
  </div>
  );
};

export default App;

