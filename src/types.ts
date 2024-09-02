import { BooksStore } from "./stores/BooksStore";

export type RootStackParamList = {
  Home: undefined,
  Results: { searchText: string };
};

export type BookType = {
  id: string,
  title: string,
  author_name: string,
  lending_edition_s?: string,
  first_publish_year?: number,
};

export type RootStateType = ReturnType<typeof BooksStore.getState>;
export type AppDispatchType = typeof BooksStore.dispatch;
