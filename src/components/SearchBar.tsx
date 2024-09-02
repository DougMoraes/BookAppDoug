import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchText } from '../features/books/booksSlice';
import Button from './Button';
import { AppDispatchType, RootStateType } from '../types';

type SearchBarProps = {
  onPressSearch: (text:string | null) => void,
};

export default function SearchBar({onPressSearch}: SearchBarProps) {
  const searchText = useSelector((state: RootStateType) => state.books.searchText);
  const dispatch = useDispatch<AppDispatchType>();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={searchText || ''}
        onChangeText={(value) => dispatch(setSearchText(value))}
        testID="search-input"
      />
      <Button
        text="Search"
        style={styles.button}
        onPress={() => onPressSearch(searchText)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    flex: 1,
  },
  button: {
    height: 40,
  },
});
