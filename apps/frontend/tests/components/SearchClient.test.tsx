import { render, screen, fireEvent } from '@testing-library/react';
import Search from '../../src/app/_components/Search';
import { Post } from '../../src/app/_interfaces/Post';

const mockPosts: Post[] = [
  {
      id: 1, title: 'First Post', body: 'Content',
      userId: 0
  },
  {
      id: 2, title: 'Second Post', body: 'Content',
      userId: 1
  },
];

test('filters posts based on search term', () => {
  const setFilteredPosts = jest.fn();
  render(<Search posts={mockPosts} setFilteredPosts={setFilteredPosts} />);
  
  const input = screen.getByPlaceholderText(/Search.../i);
  fireEvent.change(input, { target: { value: 'First' } });
  
  expect(setFilteredPosts).toHaveBeenCalled();
});
