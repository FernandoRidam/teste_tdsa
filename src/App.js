import React from 'react';

import {
  Container,
} from '@material-ui/core';

import {
  Alert,
} from './components';

import { StateProvider } from './store';

import Routes from './routes';

export default function App() {
  return (
    <StateProvider>
      <Container maxWidth="lg">
        <Routes />

        <Alert />
      </Container>
    </StateProvider>
  );
};
