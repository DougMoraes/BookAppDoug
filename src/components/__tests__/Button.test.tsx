import React from 'react';
import { render, screen, userEvent } from '@testing-library/react-native';
import Button from '../Button';
import { getAsRegExp } from './__utils__/utils';

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

describe('Button Component', () => {
  test('should call onPress when Button is pressed', async () => {
    const mockOnPress = jest.fn();
    const user = userEvent.setup({
      advanceTimers: () => jest.advanceTimersToNextTimer(),
    });
    const testText = 'TestText';

    render(<Button text={testText} onPress={mockOnPress}/>);

    const rendered = screen.getAllByText(getAsRegExp(testText));

    expect(rendered.length).toBe(1);

    await user.press(rendered[0]);

    expect(mockOnPress).toHaveBeenCalled();
  });
});
