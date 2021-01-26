import React from 'react';

import { useTranslation } from 'react-i18next';

import styles from '../../styles';

export function HelperText({ name }) {
  const { t, i18n } = useTranslation();
  const stylesClass = styles();

  return (
    <span
      className={ stylesClass.helperText }
    >
      {`${ name } ${ t('form.helperText')}`}
    </span>
  );
};
