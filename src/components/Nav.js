import React, { Component } from "react";
import { Link } from "@reach/router";
import "../styles/Nav.css";
import * as api from "../utils/api";

class Nav extends Component {
    state = {
        topics: []
      };

    render() {
        const { topics } = this.state;
        return (
            <nav className='nav'>
            <Link to="/">Home</Link>
            {topics.map(topic => {
              return (
                <Link to={`topics/${topic.slug}`} key={topic.slug}>
                  {topic.slug}
                </Link>
              );
            })}
          </nav>
        );
    }

    componentDidMount = () => {
        this.fetchTopics();
      };
    
      fetchTopics = async () => {
        const topics = await api.getTopics();
        this.setState({ topics, isLoading: false });
      };
}

export default Nav;
