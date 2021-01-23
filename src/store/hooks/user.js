import { useState, useCallback, useMemo } from 'react';

import api from '../../services/api';

export function useUsers() {
  const [ loading, setLoading ] = useState( false );
  const [ data, setData ] = useState([]);

  const getUsers = useCallback( async () => {
    setLoading( true );

    const { success, data } = await api.get('/users');

    setData( data );

    setLoading( false );

    return { success, data };
  }, []);

  return useMemo(() => {
    return {
      loading,
      data,
      getUsers,
    }
  }, [ loading, data, getUsers ]);
};
