import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import {
  ThemeProvider,
} from '@material-ui/core/styles';

import App from './App';

import theme from './theme';

import './styles.css';

import './config/i18n';

ReactDOM.render(
  <Suspense fallback="Loading...">
    <ThemeProvider theme={ theme }>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Suspense>
, document.getElementById('root'));
