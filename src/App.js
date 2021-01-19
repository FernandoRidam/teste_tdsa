import React from 'react';

import {
  Container,
} from '@material-ui/core';

import Routes from './routes';

export function App() {
  return (
    <Container maxWidth="lg">
      <Routes />
    </Container>
  );
};

export default App;
