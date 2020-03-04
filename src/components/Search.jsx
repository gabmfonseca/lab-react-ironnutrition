import React, { Component } from 'react';
import './Search.scss';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const value = event.target.value;

    this.setState({
      search: value
    });

    this.props.search(value);
  }

  render() {
    return (
      <form>
        <input
          type="search"
          placeholder="Search for a meal"
          name="search"
          value={this.state.search}
          onChange={this.handleInputChange}
        ></input>
      </form>
    );
  }
}

export default Search;
