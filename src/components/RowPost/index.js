import React, {
  useState,
} from 'react';

import {
  TableRow,
  TableCell,
  IconButton,
  Collapse,
  Box,
  Container,
  Typography,
} from '@material-ui/core';

import {
  Edit,
  Delete,
  KeyboardArrowUp,
  KeyboardArrowDown,
} from '@material-ui/icons';

import { useTranslation } from 'react-i18next';

import {
  useStore,
} from '../../store';

import styles from '../../styles';

export function RowPost({ post, openModalPost }) {
  const { t, i18n } = useTranslation();

  const stylesClass = styles();

  const { users, posts } = useStore();

  const [ open, setOpen ] = useState( false );

  function getUserName() {
    return users?.data.find( user => post.userId === user.id )?.name;
  };

  function handleEditPost() {
    posts.selectPost( post );

    openModalPost();
  };

  return (
    <>
      <TableRow className={ stylesClass.row }>
        <TableCell className={ stylesClass.tableIdColumn }>
          <Typography variant="body1">{ post?.id }</Typography>
        </TableCell>

        <TableCell className={ stylesClass.tableTitleColumn }>
          <Typography variant="body1">{ post?.title }</Typography>
        </TableCell>

        <TableCell className={ stylesClass.tableUserColumn }>
          <Typography variant="body1">{ getUserName()}</Typography>
        </TableCell>

        <TableCell className={ stylesClass.tableActionsColumn } align="center">
          <IconButton
            className={ stylesClass.icon }
            color="primary"
            onClick={ handleEditPost }
          >
            <Edit />
          </IconButton>

          <IconButton className={ stylesClass.iconDelete } onClick={() => {}}>
            <Delete />
          </IconButton>
        </TableCell>

        <TableCell className={ stylesClass.tableCollapseColumn } align="right">
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
      </TableRow>

      <TableRow className={ stylesClass.collapseRow }>
        <TableCell colSpan={ 5 } className={ !open ? stylesClass.closedCollapse : {}}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box className={ stylesClass.box }>
              <Typography variant="h6">{ t('tablePosts.columnMessage')}</Typography>

              <Container className={ stylesClass.messageView }>
                <Typography variant="body2">{ post.body }</Typography>
              </Container>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
