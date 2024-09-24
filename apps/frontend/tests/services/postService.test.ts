import { fetchPosts } from '../../src/app/_services/postService';
import { apiGet } from '../../src/app/_services/apiService';

jest.mock('../../src/app/_services/apiService');

test('fetchPosts returns posts and total count', async () => {
  (apiGet as jest.Mock).mockResolvedValueOnce([{ id: 1, title: 'Test Post' }]);
  (apiGet as jest.Mock).mockResolvedValueOnce(Array(10).fill({})); // Simula 10 posts

  const { posts, totalPosts } = await fetchPosts(1, 5);
  
  expect(posts).toHaveLength(1);
  expect(totalPosts).toBe(10);
});
