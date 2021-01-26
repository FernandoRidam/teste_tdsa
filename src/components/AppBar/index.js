import React, {
  useState,
} from 'react';

import {
  AppBar,
  Toolbar,
  Typography,
  FormGroup,
  FormControlLabel,
  Switch,
} from '@material-ui/core';

import { useTranslation } from 'react-i18next';

import styles from '../../styles';

export function ApplicationBar({ title }) {
  const { t, i18n } = useTranslation();

  const stylesClass = styles();

  const [ translate, setTranslate ] = useState( false );

  function changeLang( value ) {
    setTranslate( value );

    i18n.changeLanguage( value ? 'en' : 'pt');
  };

  return (
    <AppBar position="absolute" className={ stylesClass.appBar }>
      <Toolbar className={ stylesClass.toolbar }>
        <Typography variant="h6">{ title }</Typography>

        <FormGroup row className={ stylesClass.checks }>
          <Typography variant="body1">{ t('header.langLabel')}</Typography>
          <FormControlLabel
            control={
              <Switch checked={ translate } onChange={ event => changeLang( event.target.checked )}/>
            }
            label={ t('header.lang')}
          />
        </FormGroup>
      </Toolbar>
    </AppBar>
  );
};
