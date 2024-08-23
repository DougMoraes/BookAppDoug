import { createSlice } from '@reduxjs/toolkit';
import { Book } from '../../types';

const MockBook = {
  id: '1',
  title: 'One Title',
  author: 'One Author',
};

export interface BooksState {
  results: Book[]
}

const initialState: BooksState = {
  results: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    searchBooks: (state) => {
      state.results = [MockBook];
    },
  },
});

export const { searchBooks } = booksSlice.actions;

export default booksSlice.reducer;
