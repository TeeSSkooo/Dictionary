import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import dictionaryApi from 'api/dictionaryApi';
import dictionaryReducer from './slices/dictionarySlice';

const rootReducer = combineReducers({
  [dictionaryApi.reducerPath]: dictionaryApi.reducer,
  dictionary: dictionaryReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dictionaryApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

export const persistor = persistStore(store);
