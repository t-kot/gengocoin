import React, { Component } from 'react'
import { drizzleConnect } from 'drizzle-react';
import PropTypes from 'prop-types';
import Betting from './../../../build/contracts/Betting.json'
import VoteForm from './VoteForm.jsx';

class Vote extends Component {
  constructor(props, context) {
    super(props);
    this.addPlaceVotes = this.addPlaceVotes.bind(this);
  }

  addPlaceVotes(volume, values) {
    debugger;
    this.props.addPlaceVotes(volume, values);
  }

  render() {
    return (
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            投票所
          </div>
          <div className="pure-u-1-1">
            <VoteForm addPlaceVotes={this.addPlaceVotes} />
          </div>
        </div>
      </main>
    )
  }
}

Vote.contextTypes = {
    drizzle: PropTypes.object
}

export default Vote
