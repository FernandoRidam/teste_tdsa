import React from 'react';

import {
  Container,
} from '@material-ui/core';

import { StateProvider } from './store';

import Routes from './routes';

export default function App() {
  return (
    <StateProvider>
      <Container maxWidth="lg">
        <Routes />
      </Container>
    </StateProvider>
  );
};
