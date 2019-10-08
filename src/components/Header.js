import "../styles/Header.css";
import { Link } from "@reach/router";
import React, { Component } from "react";
import avatar from "../images/avatar.png";

class Header extends Component {
  render() {
    const { users } = this.props;
    return (
      <div className="header">
        <h1 className="header-text">
          <Link to="/">
            <span>{"<"}</span> NC News <span>{" />"}</span>
          </Link>
        </h1>
        <div className="user">
          <img src={avatar} height="30px" width="30px" alt="avatar" />
          <p>Logged in as:</p>
          <select onChange={this.handleChange}>
            {users.map(user => (
              <option value={user.username} key={user.username}>
                {user.username}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }

  handleChange = event => {
    const { setUser } = this.props;
    const { value } = event.target;
    setUser(value);
  };
}

export default Header;
