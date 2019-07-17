import React, { Component } from "react";
import * as api from "../utils/api";

class Vote extends Component {
  state = {
    voteChange: 0
  };

  render() {
    const { votes } = this.props;
    const { voteChange } = this.state;
    return (
      <div>
        <button onClick={() => this.vote(1)}>+</button>
        <b>{votes + voteChange}</b>
        <button onClick={() => this.vote(-1)}>-</button>
      </div>
    );
  }

  vote = inc_votes => {
    const { id, section } = this.props;
    api.updateVotes(id, inc_votes, section);
    this.setState(state => (state.voteChange += inc_votes));
  };
}

export default Vote;
