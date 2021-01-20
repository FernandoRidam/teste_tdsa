import React, {
  useState,
  useEffect,
} from 'react';

import {
  Container,
  Paper,
  Grid,
  Select,
  MenuItem,
  Typography,
} from '@material-ui/core';

import {
  ApplicationBar,
  TableList,
} from '../../components';

import styles from '../../styles';

export function Main() {
  const stylesClass = styles();

  const [ users, setUsers ] = useState( null );
  const [ selectedUser, setSelectedUser ] = useState( 0 );

  const [ posts, setPosts ] = useState( null );

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
    </>
  );
};
