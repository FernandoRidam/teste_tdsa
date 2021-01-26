import { useState, useCallback, useMemo } from 'react';

import api from '../../services/api';

export function usePost() {
  const [ getting, setGetting ] = useState( false );
  const [ saving, setSaving ] = useState( false );
  const [ data, setData ] = useState([]);

  const [ post, setPost ] = useState( null );

  const savePost = useCallback( async ( newPost ) => {
    setSaving( true );

    const { success, data: newPostData } = await api.post('/posts', newPost );

    setData([ ...data, newPostData ]);

    setSaving( false );

    return { success, data: newPostData };
  }, [ data ]);

  const updatePost = useCallback( async ( id, postData ) => {
    setSaving( true );

    const { success, data } = await api.patch(`/posts/${ id }`, postData );

    getPosts();

    setSaving( false );

    return { success, data };
  }, []);

  const getPosts = useCallback( async () => {
    setGetting( true );

    const { success, data } = await api.get('/posts');

    setData( data );

    setGetting( false );

    return { success, data };
  }, []);

  const getPostsByUser = useCallback( async ( id ) => {
    setGetting( true );

    const { success, data } = await api.get(`/users/${ id }/posts`);

    setData( data );

    setGetting( false );

    return { success, data };
  }, []);

  const selectPost = useCallback(( post ) => {
    setPost( post );
  }, [ post ]);

  return useMemo(() => {
    return {
      getting,
      saving,
      data,
      post,
      savePost,
      updatePost,
      getPosts,
      getPostsByUser,
      selectPost,
    }
  }, [
    getting,
    saving,
    data,
    post,
    savePost,
    updatePost,
    getPosts,
    getPostsByUser,
    selectPost,
  ]);
};
