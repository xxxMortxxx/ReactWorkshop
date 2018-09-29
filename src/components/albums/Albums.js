
import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../loading/Loading';

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
    <li key={album.id}>
      <Link to={`/albums/${album.id}`}>{album.title}</Link>
    </li>
  );

  render() {
    const { data, isLoading } = this.state;

    return (
      <Loading isLoading={isLoading}>
        <ul>{data.map(this.renderAlbums)}</ul>
      </Loading>
    )
  }
}