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
  const results = useSelector((state: RootStateType) => state.books.results);
  const dispatch = useDispatch<AppDispatchType>();

  const onPressSearch = async (text: string) => {
    try {
      await dispatch(fetchBooks({text, page: 1}));
      setCurrentPage(1);
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
      <FlatList
        data={results}
        renderItem={({ item }) => <BookCard key={item.id} book={item} /> }
        keyExtractor={item => item.id}
        onEndReached={() => {
          console.log('onEndReached', currentPage);
          setCurrentPage(currentPage + 1);
        }}
      />
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
