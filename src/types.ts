import { BooksStore } from "./stores/BooksStore";

export type RootStackParamList = {
  Home: undefined,
  Results: { searchText: string };
};

export type Book = {
  id: string,
  title: string,
  author: string
};

export type RootStateType = ReturnType<typeof BooksStore.getState>;
export type AppDispatchType = typeof BooksStore.dispatch;
