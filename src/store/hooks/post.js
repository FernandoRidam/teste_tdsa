import { useState, useCallback, useMemo } from 'react';

import api from '../../services/api';

export function usePosts() {
  const [ loading, setLoading ] = useState( false );
  const [ data, setData ] = useState([]);

  const getPosts = useCallback( async () => {
    setLoading( true );

    const { success, data } = await api.get('/posts');

    setData( data );

    setLoading( false );

    return { success, data };
  }, []);

  const getPostsByUser = useCallback( async ( id ) => {
    setLoading( true );

    const { success, data } = await api.get(`/users/${ id }/posts`);

    setData( data );

    setLoading( false );

    return { success, data };
  }, []);

  return useMemo(() => {
    return {
      loading,
      data,
      getPosts,
      getPostsByUser,
    }
  }, [ loading, data, getPosts, getPostsByUser ]);
};
