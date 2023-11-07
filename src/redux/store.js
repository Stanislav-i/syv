import { configureStore } from '@reduxjs/toolkit';
import { carsListReducer } from './carsListSlice';
import { themeReducer } from './themeSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { favouritesReducer } from './favouritesSlice';

const ThemePersistConfig = {
  key: 'theme',
  storage,
};

const FavouritesPersistConfig = {
  key: 'favourites',
  storage,
};

export const store = configureStore({
  reducer: {
    cars: carsListReducer,
    favourites: persistReducer(FavouritesPersistConfig, favouritesReducer),
    theme: persistReducer(ThemePersistConfig, themeReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
