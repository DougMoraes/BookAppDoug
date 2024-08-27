import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../features/books/booksSlice';

export const BooksStore = configureStore({
  reducer: {
    books: booksReducer,
  },
});
