import React, { Component } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

class GifListContainer extends Component {
  state = {
    gifs: []
  }

  componentDidMount() {
    this.fetchGifs();
  }

  fetchGifs = (query = 'cats') => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=YOUR_API_KEY&rating=g&limit=3`;
    fetch(url)
      .then(response => response.json())
      .then(({data}) => {
        const gifs = data.map(gif => ({
          id: gif.id,
          url: gif.images.original.url
        }));
        this.setState({ gifs });
      });
  }

  handleSearch = query => {
    this.fetchGifs(query);
  }

  render() {
    const { gifs } = this.state;
    return (
      <div>
        <GifSearch onSubmit={this.handleSearch} />
        <GifList gifs={gifs} />
      </div>
    );
  }
}

export default GifListContainer;
