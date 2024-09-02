import { render, screen } from "@testing-library/react-native";
import BookCard from "../BookCard";

describe('BokoCard', () => {
  const bookMock = {
    title: 'Test Title',
    author_name: 'Test Author',
    id: '1',
    lending_edition_s: 'OL33021517M',
    first_publish_year: 1991,
  };

  test('should show data based on book prop', () => {
    render(<BookCard book={bookMock} />);

    const renderedTitle = screen.getAllByText('Test Title');
    const renderedAuthor = screen.getAllByText('Test Author');
    const renderedYear = screen.getAllByText('1991');
    const renderendCover = screen.getByTestId('book-cover');

    expect(renderedTitle.length).toBe(1);
    expect(renderedAuthor.length).toBe(1);
    expect(renderedYear.length).toBe(1);
    expect(renderendCover).toBeTruthy();
  });
 });
