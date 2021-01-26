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
  RowComment,
} from '../RowComment';

import styles from '../../styles';

export function TableListComment({ title, comments }) {
  const { t, i18n } = useTranslation();
  const stylesClass = styles();

  return (
    <Container className={ stylesClass.comments }>
      <Typography variant="h6">{ title }</Typography>

      <Container className={ stylesClass.tableCommentsView }>
        <Table size="small" className={ stylesClass.table }>
          <TableHead>
            <TableRow>
              <TableCell className={ stylesClass.tableNameColumn }>{ t('fields.fieldName')}</TableCell>
              <TableCell className={ stylesClass.tableEmailColumn }>{ t(('fields.fieldEmail'))}</TableCell>
              <TableCell className={ stylesClass.tableCollapseColumn } />
            </TableRow>
          </TableHead>

          <TableBody>
            {
              comments?.length > 0
                ? comments.map( comment => <RowComment key={ comment?.id } comment={ comment }/>)
                : <TableRow>
                    <TableCell colSpan={ 5 } align="center">
                      <Typography variant="subtitle1">{ t('modal.emptyData')}</Typography>
                    </TableCell>
                  </TableRow>
            }
          </TableBody>
        </Table>
      </Container>
    </Container>
  );
};
