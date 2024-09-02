import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BookType } from '../../types';

export interface BooksState {
  results: BookType[],
  searchStatus: 'ready' | 'loading' | 'failed',
  searchText: string | null,
}

const initialState: BooksState = {
  results: [],
  searchStatus: 'ready',
  searchText: null,
};

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async ({text, page}: {text: string, page: number}) => {
    const url = `https://openlibrary.org/search.json?q=${text}&limit=10&page=${page}`;

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
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
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

export const { setSearchText } = booksSlice.actions;

export default booksSlice.reducer;
