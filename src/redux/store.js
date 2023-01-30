import { configureStore } from '@reduxjs/toolkit';

import { scanApi } from './api/scan';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    [scanApi.reducerPath]: scanApi.reducer,
    auth: authReducer,
  },

  devTools: process.env.NODE_ENV === 'development',

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(scanApi.middleware),
});
