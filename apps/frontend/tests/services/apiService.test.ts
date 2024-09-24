import { Post } from '@/app/_interfaces/Post';
import { apiGet } from '../../src/app/_services/apiService';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

test('apiGet returns data on successful fetch', async () => {
  const mockData: Post = {
    id: 1, title: 'Test Post', body: 'This is the content of the test post.',
    userId: 0
  };
  mockedAxios.get.mockResolvedValueOnce(mockData);
  
  const result = await apiGet('/posts/1');
  expect(result).toEqual(mockData);
});

test('apiGet handles errors', async () => {
  mockedAxios.get.mockRejectedValueOnce(new Error('Network Error'));
  
  const result = await apiGet('/posts/1');
  expect(result).toBeNull();
});
