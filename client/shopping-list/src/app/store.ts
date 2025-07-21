import { configureStore } from '@reduxjs/toolkit';
import bucketReducer from '../features/bucketItems/bucketSlice';
import categoriesReducer from '../features/categories/categoriesSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    bucket: bucketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
