import React, {
  useState,
  useEffect,
  useCallback,
} from 'react';

import {
  Container,
  Paper,
  Grid,
  Select,
  MenuItem,
  Typography,
  Snackbar,
} from '@material-ui/core';

import MuiAlert from '@material-ui/lab/Alert';

import {
  ApplicationBar,
  TableList,
} from '../../components';

import {
  useStore,
} from '../../store';

import styles from '../../styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function Main() {
  const stylesClass = styles();
  const { users } = useStore();

  const [ openAlert, setOpenAlert ] = useState( false );
  const [ message, setMessage ] = useState('');

  const [ selectedUser, setSelectedUser ] = useState( 0 );

  const [ posts, setPosts ] = useState( null );

  const getUsers = useCallback(async () => {
    const { success } = await users.getUsers();

    if (!success) {
      setMessage('Falha ao recuperar usuários!');

      setOpenAlert( true );
    }
  }, [ users ]);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <ApplicationBar title="TESTE TDSA" />

      <Container className={ stylesClass.container }>
        <Grid container spacing={ 3 }>
          <Grid item xs={ 12 } md={ 4 } lg={ 4 }>
            <Paper className={ stylesClass.paper }>
              <Typography variant="body1" className={ stylesClass.paperTitle }>Usuário</Typography>

              <Select
                className={ stylesClass.select }
                variant="outlined"
                value={ selectedUser }
                onChange={ event => setSelectedUser( event.target.value )}
              >
                <MenuItem value={ 0 }>Todos</MenuItem>
                {
                  users?.data.length > 0
                    ? users?.data.map( user => <MenuItem key={ user.id } value={ user.id }>{ user.name }</MenuItem>)
                    : <></>
                }
              </Select>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={ stylesClass.paper }>
              <TableList title="Postagens"/>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Snackbar className={ stylesClass.snackbar } anchorOrigin={{ horizontal: 'right', vertical: 'top'}} open={ openAlert } autoHideDuration={ 6000 } onClose={() => setOpenAlert( false )}>
        <Alert onClose={() => setOpenAlert( false )} severity="error">{ message }</Alert>
      </Snackbar>
    </>
  );
};
