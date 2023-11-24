import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'; // For asynchronous actions
import usersReducer from '../reducers/usersReducer';

export const store = configureStore({
  reducer: usersReducer,
  middleware: [thunk],
});
