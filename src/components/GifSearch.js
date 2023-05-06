import React, { Component } from "react";

class GifSearch extends Component {
  state = {
    query: ""
  };

  handleInputChange = event => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.fetchGIFs(this.state.query);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Enter a Search Term:</label>
        <input
          type="text"
          value={this.state.query}
          onChange={this.handleInputChange}
        />
        <button type="submit">Find GIFs</button>
      </form>
    );
  }
}

export default GifSearch;
