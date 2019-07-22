import Header from "./components/Header";
import Nav from "./components/Nav";
import { Router } from "@reach/router";
import "../src/styles/App.css";
import Footer from "./components/Footer";
import ArticleList from "./components/ArticleList";
import ArticlePage from "./components/ArticlePage";
import Error from "./components/Errors";
import React, { Component } from "react";
import * as api from "./utils/api";

class App extends Component {
  state = {
    users: [],
    currentUser: "tickle122",
  };
  render() {
    const { users,currentUser } = this.state;
    return (
      <div className="App">
        <Header users={users} setUser={this.setUser} />
        <Nav />
        <Router className="main">
          <ArticleList path="/" />
          <ArticleList path="/topics/:topic" />
          <ArticlePage user={currentUser} path="/articles/:article_id" />
          <Error default path="/error" />
        </Router>
        <Footer />
      </div>
    );
  }

  componentDidMount = () => {
    this.fetchUsers();
  };

  fetchUsers = async () => {
    const users = await api.getUsers();
    this.setState({ users });
  };

  setUser = (user) => {
    this.setState({ currentUser: user });
  };
}

export default App;
