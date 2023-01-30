import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { scanApi } from './api/scan';
import authReducer from './slices/authSlice';
import accountReducer from './slices/accountSlice';

const persistConfig = {
  key: 'auth',
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    [scanApi.reducerPath]: scanApi.reducer,
    auth: persistedAuthReducer,
    account: accountReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(scanApi.middleware),
});

export const persistor = persistStore(store);
