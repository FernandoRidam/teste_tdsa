import React from 'react';

import {
  Typography,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from '@material-ui/core';

import {
  Row,
} from '../Row';

import styles from '../../styles';

export function TableList({ title }) {
  const stylesClass = styles();

  return (
    <>
      <Typography variant="body1" className={ stylesClass.tableTitle }>{ title }</Typography>

      <Table size="small" className={ stylesClass.table }>
        <TableHead>
          <TableRow>
            <TableCell className={ stylesClass.tableIdColumn }>ID</TableCell>
            <TableCell className={ stylesClass.tableTitleColumn }>Título</TableCell>
            <TableCell className={ stylesClass.tableUserColumn }>Usuário</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <Row />
        </TableBody>
      </Table>
    </>
  );
};
