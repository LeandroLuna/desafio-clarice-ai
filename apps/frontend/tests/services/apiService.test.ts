import '@testing-library/jest-dom';
import { Post } from '@/app/_interfaces/Post';
import { apiGet } from '../../src/app/_services/apiService';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

test('apiGet returns data on successful fetch', async () => {
  
  const mockData: Post = {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  };

  mockedAxios.get.mockResolvedValueOnce({ data: mockData });
  
  const result = await apiGet('/posts/1');
  expect(result).toEqual(mockData);
});

test('apiGet handles errors', async () => {
  const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation(() => {});

  mockedAxios.get.mockRejectedValueOnce(new Error('Network Error'));
  
  const result = await apiGet('/posts/1');
  expect(result).toBeNull();

  consoleErrorMock.mockRestore();
});