import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../features/books/booksSlice';

export const BooksStore = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export type RootState = ReturnType<typeof BooksStore.getState>
export type AppDispatch = typeof BooksStore.dispatch
