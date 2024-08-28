import React from 'react';
import HomeScreen from "../HomeScreen";
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';

describe('HomeScreen', () => {
  test('should render correctly', () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();

    const tree = render(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
