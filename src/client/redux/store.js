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
import storage from 'redux-persist/lib/storage/index.js';
import { configureStore } from '@reduxjs/toolkit';

// import { authReducer } from './auth/slice';
import { recipesReducer } from './recipes/slice.js';
// import { categoriesReducer } from './categories/slice';
// import { ingredientsReducer } from './ingredients/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    // auth: persistReducer(authPersistConfig, authReducer),
    recipes: recipesReducer,
    // categories: categoriesReducer,
    // ingredients: ingredientsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export { store, persistor };