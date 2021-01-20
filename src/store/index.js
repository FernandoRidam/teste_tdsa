import React, { createContext, useContext, useCallback } from 'react';

import {
  useUsers,
  usePosts,
} from './hooks';

export const store = createContext({
  users: { data: [], getUsers: () => ({ success: true, data: []})},
  posts: { data: [], getPosts: () => ({ success: true, data: []})},
});

const { Provider } = store;

export const useStore = () => useContext(store);

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
