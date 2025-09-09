import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import authReducer from './auth-slice';

// Combine reducers if you have more slices
const rootReducer = combineReducers({
  auth: authReducer,
});

// Persist configuration
const persistConfig = {
  key: 'root', // key in localStorage
  storage,     // using localStorage
  whitelist: ['auth'], // only persist auth slice
};

// Wrap reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // required for redux-persist
    }),
});

export const persistor = persistStore(store);

export type ReduxStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
