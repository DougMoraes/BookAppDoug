import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { useSelector } from 'react-redux';
import { RootState } from '../stores/BooksStore';
import SearchBar from '../components/SearchBar';
import { Book } from '../types';

function ResultsScreen(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const initialResults = useSelector((state: RootState) => state.books.results);
  const [results, setResults] = useState<Book[]>([]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{...styles.container, ...backgroundStyle}}>
      <Text>ResultsScreen</Text>
      <SearchBar onPressSearch={() => setResults(initialResults)}/>
      {results.map((book) => <Text key={book.id}>{book.title}</Text>)}
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
