import React from 'react';

import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';

import styles from './styles';

export function Main() {
  const stylesClass = styles();

  return (
    <AppBar position="absolute" className={ stylesClass.appBar }>
      <Toolbar className={ stylesClass.toolbar }>
        <Typography variant="h6">TESTE TDSA</Typography>
      </Toolbar>
    </AppBar>
  );
};
