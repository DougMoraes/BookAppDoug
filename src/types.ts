export type RootStackParamList = {
  Home: undefined,
  Results: { searchText: string };
};

export type Book = {
  id: string,
  title: string,
  author: string
};