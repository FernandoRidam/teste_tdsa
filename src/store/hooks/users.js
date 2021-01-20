import { useState, useCallback, useMemo } from 'react';

import api from '../../services/api';

export function useUsers() {
  const [ data, setData ] = useState([]);

  const getUsers = useCallback( async () => {
    const { success, data } = await api.get('/users');

    setData( data );

    return { success, data };
  }, []);

  return useMemo(() => {
    return {
      data,
      getUsers,
    }
  }, [ data, getUsers ]);
};
