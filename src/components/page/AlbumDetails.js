import React from 'react';

export default ({ match }) => (
  <div>Album details page for ID: {match.params.id}</div>
);