import React from 'react';
import HomeScreen from "../HomeScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { renderWithProviders } from '../../__tests__/__utils__/utils';

describe('HomeScreen', () => {
  test('should render correctly', () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();

    const tree = renderWithProviders(
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
