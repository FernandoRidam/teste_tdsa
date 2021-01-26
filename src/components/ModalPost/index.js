import React, {
  useState,
  useEffect,
} from 'react';

import {
  Modal,
  Toolbar,
  Paper,
  Typography,
  Container,
  Button,
  FormControl,
  InputLabel,
  TextField,
  Select,
  MenuItem,
  Divider,
  LinearProgress,
} from '@material-ui/core';

import {
  useForm,
  Controller,
} from "react-hook-form";

import { useTranslation } from 'react-i18next';

import {
  FormComment,
} from '../FormComment';

import {
  HelperText,
} from '../HelperText';

import {
  useStore,
} from '../../store';

import styles from '../../styles';

export function ModalPost({ open, close }) {
  const { t, i18n } = useTranslation();
  const stylesClass = styles();

  const { register, handleSubmit, getValues, setValue, control, errors, formState, } = useForm();

  const { isDirty } = formState;

  const { users, posts, alert } = useStore();

  const [ post, setPost ] = useState( null );
  const [ stayOpen, setStayOpen ] = useState( null );

  const onSubmit = async ( data ) => {
    if( !post ) {
      const { success, data: postData } = await posts.savePost( JSON.stringify( data ));

      setPost( postData.id );

      const type = success ? 'success' : 'error';
      const message = success ? t('alerts.successNewPost') : t('alerts.failureNewPost');

      alert.showAlert( type, message );
    } else {
      const { success } = await posts.updatePost( post.id, JSON.stringify( data ));

      const type = success ? 'success' : 'error';
      const message = success ? t('alerts.successEditPost') : t('alerts.failureEditPost');

      alert.showAlert( type, message );
    }

    if( !stayOpen ) {
      close();
    } else {
      setValue('title', '');
      setValue('body', '');
      setValue('userId', 1 );
    }
  };

  useEffect(() => {
    if( posts?.post?.id ) {
      setPost( posts.post );
    }
  }, [ posts?.post ]);

  useEffect(() => {
    if( post?.id ) {
      setValue('title', post?.title, { shouldValidate: true });
      setValue('body', post?.body, { shouldValidate: true });
      setValue('userId', post?.userId, { shouldValidate: true });
    }
  }, [ post ]);

  return (
    <Modal
      open={ open }
      onClose={ close }
      className={ stylesClass.modal }
    >
      <Paper className={ stylesClass.modalView }>
        <Toolbar className={ stylesClass.modalToolbar }>
          <Typography className={ stylesClass.modalTitle } variant="h6" id="usuarios">
            {
              post
                ? t('modal.titleEdit')
                : t('modal.titleNew')
            }
          </Typography>
        </Toolbar>

        <Container className={ stylesClass.bodyModal }>
          <form
            className={ stylesClass.form }
            onSubmit={ handleSubmit( onSubmit )}
          >
            <Typography variant="h6">{ t('modal.subTitlePost')}</Typography>

            <TextField
              label={ t('tablePosts.columnTitle')}
              variant="outlined"
              inputRef={ register({ required: true })}
              color="primary"
              name="title"
              className={ stylesClass.textField }
              helperText={ errors.title?.type === 'required' && <HelperText name={ t('tablePosts.columnTitle')} />}
              error={ !!errors.title }
            />

            <TextField
              label={ t('tablePosts.columnMessage')}
              variant="outlined"
              multiline
              rows={ 3 }
              rowsMax={ 3 }
              inputRef={ register({ required: true })}
              color="primary"
              name="body"
              className={ stylesClass.textField }
              helperText={ errors.body?.type === 'required' && <HelperText name={ t('tablePosts.columnMessage')} />}
              error={ !!errors.body }
            />

            <FormControl
              className={ stylesClass.select }
              name="userId"
              variant="outlined"
            >
              <InputLabel htmlFor="user-select" id="user-select-label">{ t('tablePosts.columnUser')}</InputLabel>
              <Controller
                as={
                  <Select
                    id="user-select"
                    labelId="user-select-label"
                    name="userId"
                  >
                    {
                      users?.data.map( user => <MenuItem key={ user.id } value={ user.id }>{ user.name }</MenuItem>)
                    }
                  </Select>
                }
                name="userId"
                control={ control }
                defaultValue={ 1 }
              />
            </FormControl>

            <Container className={ stylesClass.actions }>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={() => setStayOpen( true )}
                className={ stylesClass.action }
                disabled={ posts.saving || ( post && !isDirty )}
              >
                { t('buttons.saveAndContinue')}

                { posts.saving && <LinearProgress className={ stylesClass.linearProgress} />}
              </Button>

              <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={() => setStayOpen( false )}
                className={ stylesClass.action }
                disabled={ posts.saving || ( post && !isDirty )}
              >
                { t('buttons.save')}

                { posts.saving && <LinearProgress className={ stylesClass.linearProgress} />}
              </Button>

              <Button
                variant="outlined"
                color="primary"
                className={ stylesClass.action }
                onClick={ close }
              >
                { t('buttons.exit')}
              </Button>
            </Container>
          </form>

          <Divider
            className={ stylesClass.divider }
            orientation="vertical"
            flexItem
          />

          <FormComment
            postValues={() => getValues()}
          />
        </Container>
      </Paper>
    </Modal>
  );
};
