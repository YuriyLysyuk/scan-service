import { configureStore } from '@reduxjs/toolkit';

import { accountAPI } from './api/accountAPI';
import accountReducer from './features/accountSlice';

export const store = configureStore({
  reducer: {
    [accountAPI.reducerPath]: accountAPI.reducer,
    accountState: accountReducer,
  },

  devTools: process.env.NODE_ENV === 'development',

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(accountAPI.middleware),
});
