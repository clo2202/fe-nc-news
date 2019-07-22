import React, { Component } from "react";
import * as api from "../utils/api";

class Vote extends Component {
  state = {
    voteChange: 0,
    isClicked: false
  };

  render() {
    const { votes } = this.props;
    const { voteChange, isClicked } = this.state;
    return (
      <div className='votes'>
        <button onClick={() => this.vote(1)} disabled={isClicked}>+</button>
        <b>{votes + voteChange}</b>
        <button onClick={() => this.vote(-1)} disabled={isClicked}>-</button>
      </div>
    );
  }

  vote = inc_votes => {
    const { id, section } = this.props;
    api.updateVotes(id, inc_votes, section);
    this.setState(state => state.voteChange += inc_votes)
    this.setState({isClicked: true});
  };
}

export default Vote;
