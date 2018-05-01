import { drizzleConnect } from 'drizzle-react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class VoteForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = { value: '' };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addPlaceVotes(1, this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          元号に含まれる漢字1字を入力
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="投票" />
      </form>
    )
  }
}

VoteForm.propTypes = {
  addPlaceVotes: PropTypes.func.isRequired,
};

export default VoteForm;
