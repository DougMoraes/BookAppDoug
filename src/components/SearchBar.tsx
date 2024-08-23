import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Button from './Button';

type SearchBarProps = {
  onPressSearch: () => void,
};

export default function SearchBar({onPressSearch}: SearchBarProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
      />
      <Button
        text="Search"
        style={styles.button}
        onPress={onPressSearch}
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
