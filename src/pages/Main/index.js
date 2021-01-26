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

import { useTranslation } from 'react-i18next';

import {
  ApplicationBar,
  ModalPost,
  TableListPost,
} from '../../components';

import {
  useStore,
} from '../../store';

import styles from '../../styles';

export function Main() {
  const stylesClass = styles();

  const { t, i18n } = useTranslation();
  const { alert, users, posts } = useStore();

  const [ openModal, setOpenModal ] = useState( false );

  const [ selectedUser, setSelectedUser ] = useState( 0 );

  const [ search, setSearch ] = useState('');

  const getUsers = useCallback( async () => {
    const { success } = await users.getUsers();

    if (!success) {
      alert.showAlert('error', t('alerts.failureGetUsers'));
    }
  }, [ users ]);

  const getPosts = useCallback( async () => {
    if( selectedUser !== 0 ) {
      const { success } = await posts.getPostsByUser( selectedUser );

      if (!success) {
        alert.showAlert('error', t('alerts.failureGetPosts'));
      }
    } else {
      const { success } = await posts.getPosts();

      if (!success) {
        alert.showAlert('error', t('alerts.failureGetPosts'));
      }
    }
  }, [ posts, selectedUser ]);

  useEffect(() => {
    getPosts();
  }, [ selectedUser ]);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <ApplicationBar title={ t('header.title')} />

      <Container className={ stylesClass.container }>
        <Grid container spacing={ 3 }>
          <Grid item xs={ 12 } md={ 4 } lg={ 4 }>
            <Paper className={ stylesClass.paper }>
              <Typography variant="body1" className={ stylesClass.paperTitle }>{ t('body.quickSearch')}</Typography>

              <TextField
                placeholder={ t('body.labelSearch')}
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
              <Typography variant="body1" className={ stylesClass.paperTitle }>{ t('body.user')}</Typography>

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
                      : t('body.all')
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
              <TableListPost
                title={ t('tablePosts.titleTable')}
                search={ search.toLowerCase()}
                openModalPost={() => setOpenModal( true )}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <ModalPost open={ openModal } close={() => setOpenModal( false )} />
    </>
  );
};
