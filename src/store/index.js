import React, { createContext, useContext } from 'react';

import {
  useAlert,
  useUser,
  usePost,
  useComment,
} from './hooks';

export const store = createContext({
  alert: {
    showAlert: ( type, message ) => {},
    closeAlert: () => {},
  },

  users: {
    loading: false,
    data: [],
    getUsers: () => ({ success: true, data: []}),
  },

  posts: {
    loading: false,
    saving: false,
    data: [],
    post: {},
    savePost: () => ({ success: true, data: []}),
    updatePost: () => ({ success: true, data: []}),
    getPosts: () => ({ success: true, data: []}),
    getPostsByUser: () => ({ success: true, data: []}),
    selectPost: () => {},
  },

  comments: {
    loading: false,
    saving: false,
    data: [],
    saveComment: () => ({ success: true, data: []}),
    getCommentsByPost: () => ({ success: true, data: []}),
  },
});

const { Provider } = store;

export const useStore = () => useContext( store );

export function StateProvider({ children }) {
  const alert = useAlert();
  const users = useUser();
  const posts = usePost();
  const comments = useComment();

  return (
    <Provider
      value={{
        alert,
        users,
        posts,
        comments,
      }}
    >
      { children }
    </Provider>
  );
};
