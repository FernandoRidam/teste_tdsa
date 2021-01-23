import React, {
  useState,
  useEffect,
} from 'react';

import {
  Typography,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Container,
  CircularProgress,
} from '@material-ui/core';

import {
  Row,
} from '../Row';

import {
  useStore,
} from '../../store';

import styles from '../../styles';

export function TableList({ title, search }) {
  const stylesClass = styles();

  const { posts, users } = useStore();

  const [ postsList, setPostsList ] = useState( null );

  useEffect(() => {
    if( search !== '') {
      let postsFiltered = [];

      postsFiltered = posts?.data.filter( post => post.title.toLowerCase().includes( search ) || post.body.toLowerCase().includes( search ));

      if( postsFiltered.length === 0 ) {
        const usersIds = users?.data.filter( user => user.name.toLowerCase().includes( search )).map( user => user.id );

        console.log( usersIds );

        postsFiltered = posts?.data.filter( post => usersIds.includes( post.userId ));
      }

      setPostsList( postsFiltered );
    } else {
      setPostsList( posts?.data );
    }
  }, [ search ]);

  useEffect(() => {
    setPostsList( posts?.data );
  }, [ posts?.data ]);

  return (
    <>
      <Typography variant="h6" className={ stylesClass.tableTitle }>{ title }</Typography>

      <Container className={ stylesClass.tableView }>
        <Table size="small" className={ stylesClass.table }>
          <TableHead>
            <TableRow>
              <TableCell className={ stylesClass.tableIdColumn }>ID</TableCell>
              <TableCell className={ stylesClass.tableTitleColumn }>Título</TableCell>
              <TableCell className={ stylesClass.tableUserColumn }>Usuário</TableCell>
              <TableCell align="center" className={ stylesClass.tableUserColumn }>Ações</TableCell>
              <TableCell className={ stylesClass.tableCollapseColumn } />
            </TableRow>
          </TableHead>

          <TableBody>
            {
              !posts?.loading
                ? postsList?.length > 0
                  ? postsList.map( post => <Row key={ post?.id } post={ post }/>)
                  : <TableRow>
                      <TableCell colSpan={ 5 } align="center">
                        <Typography variant="subtitle1">Nenhuma postagem encontrada...</Typography>
                      </TableCell>
                    </TableRow>
                : <TableRow>
                    <TableCell colSpan={ 5 } align="center">
                      <CircularProgress />
                    </TableCell>
                  </TableRow>
            }
          </TableBody>
        </Table>
      </Container>
    </>
  );
};
