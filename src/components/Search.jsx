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
    const query = event.target.value;

    this.setState({
      search: query
    });

    this.props.search(query);
  }

  render() {
    return (
      <form>
        <input
          type="search"
          placeholder="Search for a meal"
          name="query"
          value={this.state.search}
          onChange={this.handleInputChange}
        ></input>
      </form>
    );
  }
}

export default Search;
