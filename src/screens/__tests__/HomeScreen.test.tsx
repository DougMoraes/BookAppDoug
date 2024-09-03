import React from 'react';
import HomeScreen from "../HomeScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { renderWithProviders } from '../../__tests__/__utils__/utils';
import { screen, userEvent } from '@testing-library/react-native';

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

  test('should show error message if Search text < 3', async () => {
    const user = userEvent.setup({
      advanceTimers: () => jest.advanceTimersToNextTimer(),
    });
    const Stack = createNativeStackNavigator<RootStackParamList>();

    renderWithProviders(
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    );

    const renderedSearchButton = screen.getAllByText('Search');
    const renderedErrorMessagePrePress = screen.queryByText('Search text must have at least 3 characters');

    expect(renderedSearchButton.length).toBe(1);
    expect(renderedErrorMessagePrePress).toBeFalsy();

    await user.press(renderedSearchButton[0]);

    const renderedErrorMessagePostPress = screen.getAllByText('Search text must have at least 3 characters');

    expect(renderedErrorMessagePostPress.length).toBe(1);
  });
});
