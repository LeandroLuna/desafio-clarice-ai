import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import PostItem from '../../src/app/_components/PostItem';
import { Post } from '../../src/app/_interfaces/Post';

const mockPost: Post = {
    id: 1, title: 'Test Post', body: 'This is the content.',
    userId: 0
};

test('renders post item', () => {
  render(<PostItem post={mockPost} />);
  
  expect(screen.getByText(/Test Post/i)).toBeInTheDocument();
  expect(screen.getByText(/This is the content/i)).toBeInTheDocument();
});
