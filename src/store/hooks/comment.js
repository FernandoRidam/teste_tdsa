import { useState, useCallback, useMemo } from 'react';

import api from '../../services/api';

export function useComment() {
  const [ getting, setGetting ] = useState( false );
  const [ saving, setSaving ] = useState( false );
  const [ data, setData ] = useState([]);

  const saveComment = useCallback( async ( newComment ) => {
    setSaving( true );

    const { success, data: newCommentData } = await api.post('/comments', newComment );

    setData([ ...data, newCommentData ]);

    setSaving( false );

    return { success, data: newCommentData };
  }, [ data ]);

  const getCommentsByPost = useCallback( async ( id ) => {
    setGetting( true );

    const { success, data } = await api.get(`/posts/${ id }/comments`);

    setData( data );

    setGetting( false );

    return { success, data };
  }, []);

  return useMemo(() => {
    return {
      getting,
      saving,
      data,
      saveComment,
      getCommentsByPost,
    }
  }, [
    getting,
    saving,
    data,
    saveComment,
    getCommentsByPost,
  ]);
};
