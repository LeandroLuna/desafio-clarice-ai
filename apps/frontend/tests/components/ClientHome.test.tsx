import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ClientHome from '../../src/app/_components/ClientHome'; 

const mockPosts = [
  { id: 1, title: 'Test Post 1', body: 'This is the content of post 1.', userId: 1 },
  { id: 2, title: 'Test Post 2', body: 'This is the content of post 2.', userId: 1 }
];

test('renders blog posts', () => {
  render(<ClientHome posts={mockPosts} />);

  expect(screen.getByText(/Blog Posts/i)).toBeInTheDocument();
  expect(screen.getByText(/Test Post 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Test Post 2/i)).toBeInTheDocument();
});
