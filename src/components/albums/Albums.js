
import React from 'react';

const albumsURL = 'https://jsonplaceholder.typicode.com/albums';

export default class Albums extends React.Component {
  state = {
    data: [],
    isLoading: true
  };

  componentDidMount() {
    fetch(albumsURL)
      .then(response => response.json())
      .then(data => this.setState({
        data,
        isLoading: false,
      }))
  }

  renderAlbums = album => (
    <li key={album.id}>{album.title}</li>
  );

  render() {
    return (
      <ul>
        {this.state.data.map(this.renderAlbums)}
      </ul>
    )
  }
}