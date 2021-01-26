import React from 'react';

import {
  Button,
  LinearProgress,
} from '@material-ui/core';

import styles from '../../styles';

export function LoadingButton({ children, loading, ...props }) {
  const stylesClass = styles();

  return (
    <Button
      data-testid="loading-button"
      {...props }
    >
      { children }

      { loading && <LinearProgress className={ stylesClass.linearProgress} />}
    </Button>
  );
};
