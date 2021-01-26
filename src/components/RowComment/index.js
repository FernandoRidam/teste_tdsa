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
  KeyboardArrowUp,
  KeyboardArrowDown,
} from '@material-ui/icons';

import { useTranslation } from 'react-i18next';

import styles from '../../styles';

export function RowComment({ comment }) {
  const { t, i18n } = useTranslation();
  const stylesClass = styles();

  const [ open, setOpen ] = useState( false );

  return (
    <>
      <TableRow className={ stylesClass.row }>
        <TableCell className={ stylesClass.tableNameColumn }>
          <Typography variant="body1">{ comment?.name }</Typography>
        </TableCell>

        <TableCell className={ stylesClass.tableEmailColumn }>
          <Typography variant="body1">{ comment?.email }</Typography>
        </TableCell>

        <TableCell className={ stylesClass.tableCollapseColumn } align="right">
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
      </TableRow>

      <TableRow className={ stylesClass.collapseRow }>
        <TableCell colSpan={ 3 } className={ !open ? stylesClass.closedCollapse : {}}>
          <Collapse in={ open } timeout="auto" unmountOnExit>
            <Box className={ stylesClass.box }>
              <Typography variant="h6">{ t('modal.subTitleComment')}</Typography>

              <Container className={ stylesClass.messageView }>
                <Typography variant="body2">{ comment?.body }</Typography>
              </Container>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
