import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';
import { fetchBooks } from '../features/books/booksSlice';
import { RootStateType, AppDispatchType } from '../types';

function ResultsScreen(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const results = useSelector((state: RootStateType) => state.books.results);
  const dispatch = useDispatch<AppDispatchType>();

  const onPressSearch = async (text: string) => {
    try {
      await dispatch(fetchBooks(text));
    } catch (err) {
      console.log(err);
    }
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{...styles.container, ...backgroundStyle}}>
      <Text>ResultsScreen</Text>
      <SearchBar onPressSearch={onPressSearch}/>
      {results.map((book) => <BookCard key={book.id} book={book} />)}
    </SafeAreaView>
  );
}

export default ResultsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
