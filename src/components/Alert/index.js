import React from 'react';

import {
  Snackbar,
} from '@material-ui/core';

import MuiAlert from '@material-ui/lab/Alert';

import {
  useStore,
} from '../../store';

import styles from '../../styles';

function AlertMui(props) {
  return <MuiAlert elevation={ 6 } variant="filled" {...props} />;
}

export function Alert() {
  const stylesClass = styles();

  const { alert } = useStore();

  return (
    <Snackbar className={ stylesClass.snackbar } anchorOrigin={{ horizontal: 'right', vertical: 'top'}} open={ alert.open } autoHideDuration={ 6000 } onClose={ alert.closeAlert }>
      <AlertMui onClose={ alert.closeAlert } severity={ alert.type }>{ alert.message }</AlertMui>
    </Snackbar>
  );
};
