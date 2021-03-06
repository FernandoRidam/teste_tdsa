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
  Button,
} from '@material-ui/core';

import { useTranslation } from 'react-i18next';

import {
  RowPost,
} from '../RowPost';

import {
  useStore,
} from '../../store';

import styles from '../../styles';

export function TableListPost({ title, search, openModalPost }) {
  const { t, i18n } = useTranslation();
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
      <Container className={ stylesClass.titleView } >
        <Typography variant="h6" className={ stylesClass.tableTitle }>{ title }</Typography>

        <Button
          variant="outlined"
          color="secondary"
          onClick={ openModalPost }
        >
          { t('tablePosts.addButton')}
        </Button>
      </Container>

      <Container className={ stylesClass.tableView }>
        <Table size="small" className={ stylesClass.table }>
          <TableHead>
            <TableRow>
              <TableCell className={ stylesClass.tableIdColumn }>ID</TableCell>
              <TableCell className={ stylesClass.tableTitleColumn }>{ t('tablePosts.columnTitle')}</TableCell>
              <TableCell className={ stylesClass.tableUserColumn }>{ t('tablePosts.columnUser')}</TableCell>
              <TableCell align="center" className={ stylesClass.tableUserColumn }>{ t('tablePosts.columnActions')}</TableCell>
              <TableCell className={ stylesClass.tableCollapseColumn } />
            </TableRow>
          </TableHead>

          <TableBody>
            {
              !posts?.getting
                ? postsList?.length > 0
                  ? postsList.map( post => <RowPost key={ post?.id } post={ post } openModalPost={ openModalPost }/>)
                  : <TableRow>
                      <TableCell colSpan={ 5 } align="center">
                        <Typography variant="subtitle1">{ t('tablePosts.emptyData')}</Typography>
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
