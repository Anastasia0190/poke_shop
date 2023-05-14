import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { rootReduder } from './rootReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReduder);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);