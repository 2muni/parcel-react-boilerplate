import React from 'react';
import { withRouter } from 'react-router-dom';

export default withRouter(({ location: { search } }) => {
  const term = search.split('=')[1];
  return <div>{term}</div>;
});
