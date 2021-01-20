import { useState, useCallback, useMemo } from 'react';

import api from '../../services/api';

export function usePosts() {
  const [ data, setData ] = useState([]);

  const getPosts = useCallback( async () => {
    const { success, data } = await api.get('/posts');

    setData( data );

    return { success, data };
  }, []);

  return useMemo(() => {
    return {
      data,
      getPosts,
    }
  }, [ data, getPosts ]);
};
