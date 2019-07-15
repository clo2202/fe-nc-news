import React, { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import { Router } from '@reach/router'
import './App.css'
import Footer from './components/Footer';
import ArticleList from './components/ArticleList';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header/>
        <Nav/>
        <Router>
          <ArticleList path='/'/>
          <ArticleList path='/articles/:topic'/>
        </Router>
        <Footer/>
      </div>
    );
  }
}

export default App;
