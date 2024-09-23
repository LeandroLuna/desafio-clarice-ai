import { Post } from '../_interfaces/Post';
import { User } from '../_interfaces/User';
import { apiGet } from './apiService';

const fetchPosts = async (page: number, postsPerPage: number) => {
    const posts = await apiGet<Post[]>(`/posts?_limit=${postsPerPage}&_page=${page}`);
    const totalPosts = await apiGet<Post[]>('/posts');

    return {
        posts: posts || [],
        totalPosts: totalPosts ? totalPosts.length : 0,
    };
};

const fetchPost = async (id: string) => {
    return await apiGet<Post>(`/posts/${id}`);
};

const fetchUser = async (userId: number) => {
    return await apiGet<User>(`/users/${userId}`);
};

export { fetchPosts, fetchPost, fetchUser };