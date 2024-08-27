import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Book } from '../../types';

export interface BooksState {
  results: Book[],
  searchStatus: 'ready' | 'loading' | 'failed',
}

const initialState: BooksState = {
  results: [],
  searchStatus: 'ready',
};

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (text: string) => {
    const url = `https://openlibrary.org/search.json?q=${text}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      return json.docs;
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
          throw error;
      }
    }
  }
);

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchBooks.pending, state => {
      state.searchStatus = 'loading';
      state.results = [];
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.searchStatus = 'ready';
      state.results = action.payload;
    });
    builder.addCase(fetchBooks.rejected, state => {
      state.searchStatus = 'failed';
      state.results = [];
    });
  },
});

export default booksSlice.reducer;
