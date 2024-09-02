import { useState } from 'react';
import {
  FlatList,
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
  const [currentPage, setCurrentPage] = useState(1);
  const isDarkMode = useColorScheme() === 'dark';
  const { results, searchText } = useSelector((state: RootStateType) => state.books);
  const dispatch = useDispatch<AppDispatchType>();

  const onPressSearch = async (text: string | null) => {
    if (!text || text.length < 3) {
      return;
    }

    try {
      setCurrentPage(1);
      await dispatch(fetchBooks({text, page: currentPage}));
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
      {results.length === 0 ?
        <Text>No results found</Text> :
        <FlatList
        data={results}
        renderItem={({ item }) => <BookCard key={item.id} book={item} /> }
        keyExtractor={item => item.id}
        onEndReached={async () => {
          setCurrentPage(currentPage + 1);
          searchText &&
          await dispatch(fetchBooks({text: searchText, page: currentPage}));
        }}
      />
      }
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
