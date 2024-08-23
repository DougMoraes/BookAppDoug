import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import SearchBar from '../components/SearchBar';
import { searchBooks } from '../features/books/booksSlice';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

function HomeScreen({navigation}: HomeScreenProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useDispatch();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onPressSearch = () => {
    dispatch(searchBooks());
    navigation.navigate('Results', {searchText: 'Gabo'});
  };

  return (
    <SafeAreaView style={{...styles.container, ...backgroundStyle}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <SearchBar onPressSearch={onPressSearch}/>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
