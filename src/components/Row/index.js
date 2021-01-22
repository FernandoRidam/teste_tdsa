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

import styles from '../../styles';

export function Row() {
  const stylesClass = styles();

  const [ open, setOpen ] = useState( false );

  return (
    <>
      <TableRow>
        <TableCell className={ stylesClass.tableIdColumn }>01</TableCell>
        <TableCell className={ stylesClass.tableTitleColumn }>Título</TableCell>
        <TableCell className={ stylesClass.tableUserColumn }>Usuário</TableCell>

        <TableCell className={ stylesClass.tableActionsColumn } align="justify">
          <IconButton className={ stylesClass.icon } color="primary" onClick={() => {}}>
            <Edit />
          </IconButton>

          <IconButton className={[ stylesClass.icon, stylesClass.iconDelete ]} onClick={() => {}}>
            <Delete />
          </IconButton>
        </TableCell>

        <TableCell className={ stylesClass.tableCollapseColumn } align="right">
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell colSpan={ 6 }>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box className={ stylesClass.box }>
              <Typography variant="h6">Mensagem</Typography>

              <Container className={ stylesClass.messageView }>
                <Typography variant="body2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
              </Container>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
