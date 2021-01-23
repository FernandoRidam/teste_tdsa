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
  LinearProgress,
  TextField,
  Zoom ,
  IconButton,
  InputAdornment,
} from '@material-ui/core';

import {
  Close,
} from '@material-ui/icons';

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
  const { users, posts } = useStore();

  const [ openAlert, setOpenAlert ] = useState( false );
  const [ message, setMessage ] = useState('');

  const [ selectedUser, setSelectedUser ] = useState( 0 );

  const [ search, setSearch ] = useState('');

  const getUsers = useCallback( async () => {
    const { success } = await users.getUsers();

    if (!success) {
      setMessage('Falha ao recuperar usuários!');

      setOpenAlert( true );
    }
  }, [ users ]);

  const getPosts = useCallback( async () => {
    if( selectedUser !== 0 ) {
      const { success } = await posts.getPostsByUser( selectedUser );

      if (!success) {
        setMessage('Falha ao recuperar postagens!');

        setOpenAlert( true );
      }
    } else {
      const { success } = await posts.getPosts();

      if (!success) {
        setMessage('Falha ao recuperar postagens!');

        setOpenAlert( true );
      }
    }
  }, [ posts, selectedUser ]);

  useEffect(() => {
    getPosts();
  }, [ selectedUser ]);

  useEffect(() => {
    getUsers();
    getPosts();
  }, []);

  return (
    <>
      <ApplicationBar title="TESTE TDSA" />

      <Container className={ stylesClass.container }>
        <Grid container spacing={ 3 }>
          <Grid item xs={ 12 } md={ 4 } lg={ 4 }>
            <Paper className={ stylesClass.paper }>
              <Typography variant="body1" className={ stylesClass.paperTitle }>Busca Rápida</Typography>

              <TextField
                placeholder="Título, Mensagem, Usuário Etc."
                className={ stylesClass.textField }
                variant="outlined"
                color="primary"
                value={ search }
                onChange={ event => setSearch( event.target.value )}
                InputProps={{
                  endAdornment:
                    <InputAdornment position="end">
                      <Zoom in={ search !== ''} >
                        <IconButton edge="end" color="primary" onClick={() => setSearch('')}>
                          <Close />
                        </IconButton>
                      </Zoom >
                    </InputAdornment>,
                }}
              />
            </Paper>
          </Grid>

          <Grid item xs={ 12 } md={ 4 } lg={ 4 }>
            <Paper className={ stylesClass.paper }>
              <Typography variant="body1" className={ stylesClass.paperTitle }>Usuário</Typography>

              <Select
                className={ stylesClass.select }
                variant="outlined"
                color="primary"
                value={ selectedUser }
                onChange={ event => setSelectedUser( event.target.value )}
              >
                <MenuItem value={ 0 }>
                  {
                    users?.loading
                      ? <>
                          Carregando...

                          <LinearProgress className={ stylesClass.linearProgress }/>
                        </>
                      : 'Todos'
                  }
                </MenuItem>
                {
                  users?.data.length > 0 && users?.data.map( user => <MenuItem key={ user.id } value={ user.id }>{ user.name }</MenuItem>)
                }
              </Select>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={ stylesClass.paper }>
              <TableList title="Postagens" search={ search.toLowerCase()}/>
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
