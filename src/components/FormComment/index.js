import React, { useEffect } from 'react';

import {
  Typography,
  TextField,
  Container,
  Button,
  LinearProgress,
} from '@material-ui/core';

import {
  useForm,
} from "react-hook-form";

import { useTranslation } from 'react-i18next';

import {
  useStore,
} from '../../store';

import {
  TableListComment,
} from '../TableListComment';

import {
  HelperText,
} from '../HelperText';

import styles from '../../styles';

export function FormComment({ postValues, postIsValid }) {
  const { t, i18n } = useTranslation();
  const stylesClass = styles();

  const {
    posts,
    comments,
    alert,
  } = useStore();

  const { register, handleSubmit, setValue, control, errors } = useForm();

  const onSubmit = async ( newComment ) => {
    let successPost = true;

    if( !posts.post?.id ) {
      const { success, data } = await posts.savePost( JSON.stringify( postValues()));

      successPost = success;

      const type = successPost ? 'success' : 'error';
      const message = successPost ? t('alerts.successNewPost') : t('alerts.failureNewPost');

      alert.showAlert( type, message );

      if( successPost ) {
        posts.selectPost( data );
      }
    }

    if( successPost ) {
      const { success } = await comments.saveComment( JSON.stringify({ ...newComment, post: posts.post?.id }));

      const type = success ? 'success' : 'error';
      const message = success ? t('alerts.successNewComment') : t('alerts.failureNewComment');

      alert.showAlert( type, message );
    }

    setValue('name', '');
    setValue('email', '');
    setValue('body', '');
  };

  useEffect(() => {
    if( posts.post?.id )
      comments.getCommentsByPost( posts.post?.id );
  }, [ posts.post ]);

  return (
    <Container className={ stylesClass.form }>
      <form
        // className={ stylesClass.form }
        onSubmit={ handleSubmit( onSubmit )}
      >
        <Typography variant="h6">{ t('modal.subTitleComment')}</Typography>

        <TextField
          label={ t('fields.fieldName')}
          variant="outlined"
          inputRef={ register({ required: true })}
          color="primary"
          name="name"
          className={ stylesClass.textField }
          helperText={ errors.name?.type === 'required' && <HelperText name={ t('fields.fieldName')} />}
          error={ !!errors.name }
        />

        <TextField
          label={ t('fields.fieldEmail')}
          variant="outlined"
          inputRef={ register({ required: true })}
          color="primary"
          name="email"
          type="email"
          className={ stylesClass.textField }
          helperText={ errors.email?.type === 'required' && <HelperText name={ t('fields.fieldEmail')} />}
          error={ !!errors.email }
        />

        <TextField
          label={ t('fields.fieldComment')}
          variant="outlined"
          multiline
          rows={ 3 }
          rowsMax={ 3 }
          inputRef={ register({ required: true })}
          color="primary"
          name="body"
          className={ stylesClass.textField }
          helperText={ errors.body?.type === 'required' && <HelperText name={ t('fields.fieldComment')} />}
          error={ !!errors.body }
        />

        <Container className={ stylesClass.actionsComment }>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={ comments.saving || postIsValid }
          >
            { t('buttons.save')}

            { comments.saving && <LinearProgress className={ stylesClass.linearProgress} />}
          </Button>
        </Container>
      </form>

      <TableListComment
        title={ t('modal.subTitleComments')}
        comments={ comments?.data }
      />
    </Container>
  );
};
