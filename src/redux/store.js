import { configureStore } from '@reduxjs/toolkit';

import { scanAPI } from './api/scanAPI';

export const store = configureStore({
  reducer: {
    [scanAPI.reducerPath]: scanAPI.reducer,
  },

  devTools: process.env.NODE_ENV === 'development',

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(scanAPI.middleware),
});
