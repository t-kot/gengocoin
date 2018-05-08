import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Betting from './../../../build/contracts/Betting.json'
import VoteForm from './VoteForm.jsx';

class Vote extends Component {
  render() {
    return (
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            投票所
          </div>
          <div className="pure-u-1-1">
            <VoteForm addPlaceVotes={this.props.addPlaceVotes} />
          </div>
        </div>
      </main>
    )
  }
}

export default Vote
