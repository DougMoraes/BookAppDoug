import React from 'react';
import { render, screen, userEvent } from '@testing-library/react-native';
import SearchBar from '../SearchBar';

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

describe('SearchBar Component', () => {
  test('should call onPressSearch when search button is pressed', async () => {
    const user = userEvent.setup({
      advanceTimers: () => jest.advanceTimersToNextTimer(),
    });
    const mockOnPress = jest.fn();

    render(<SearchBar onPressSearch={mockOnPress}/>);

    const renderedInput = screen.getAllByTestId('search-input');
    const renderedButton = screen.getAllByText('Search');

    expect(renderedInput.length).toBe(1);
    expect(renderedButton.length).toBe(1);

    await user.type(renderedInput[0], 'test');
    await user.press(renderedButton[0]);

    expect(mockOnPress).toHaveBeenCalledWith('test');
  });
});
