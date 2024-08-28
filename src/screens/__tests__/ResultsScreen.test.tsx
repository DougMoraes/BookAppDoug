import { render, screen } from '@testing-library/react-native';
import ResultsScreen from '../ResultsScreen';
import { Provider } from 'react-redux';
import { BooksStore } from '../../stores/BooksStore';

describe('ResultsScreen', () => {
  it('renders correctly', () => {
    render(
      <Provider store={BooksStore}>
        <ResultsScreen />
      </Provider>
    );

    const rendered = screen.getAllByText('ResultsScreen');

    expect(rendered).toHaveLength(1);
  });
});
