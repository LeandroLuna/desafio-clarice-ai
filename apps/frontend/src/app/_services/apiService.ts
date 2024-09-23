import axios from 'axios';
import { API_BASE_URL } from '../_lib/constants';

export const apiGet = async <T>(endpoint: string): Promise<T | null> => {
    try {
        const response = await axios.get<T>(`${API_BASE_URL}${endpoint}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching ${endpoint}:`, error);
        return null;
    }
};
