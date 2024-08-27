import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Button from './Button';

type SearchBarProps = {
  onPressSearch: (text:string) => void,
};

export default function SearchBar({onPressSearch}: SearchBarProps) {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(value) => setSearchText(value)}
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
