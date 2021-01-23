import React, { createContext, useContext, useCallback } from 'react';

import {
  useUsers,
  usePosts,
} from './hooks';

export const store = createContext({
  users: {
    loading: false,
    data: [],
    getUsers: () => ({ success: true, data: []}),
  },

  posts: {
    loading: false,
    data: [],
    getPosts: () => ({ success: true, data: []}),
    getPostsByUser: () => ({ success: true, data: []}),
  },
});

const { Provider } = store;

export const useStore = () => useContext( store );

export function StateProvider({ children }) {
  const users = useUsers();
  const posts = usePosts();

  return (
    <Provider
      value={{
        users,
        posts,
      }}
    >
      { children }
    </Provider>
  );
};
