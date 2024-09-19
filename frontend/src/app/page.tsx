import Link from 'next/link';
import axios from 'axios';
import Search from './components/Search';

interface Post {
  id: number;
  title: string;
  body: string;
}

const POSTS_PER_PAGE = 5;

const fetchPosts = async (page: number) => {
  const res = await axios.get<Post[]>(
    `https://jsonplaceholder.typicode.com/posts?_limit=${POSTS_PER_PAGE}&_page=${page}`
  );
  const totalPostsRes = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  return {
    posts: res.data,
    totalPosts: totalPostsRes.data.length,
  };
};

export default async function Home({ searchParams }: { searchParams: { page: string } }) {
  const currentPage = searchParams.page ? Number(searchParams.page) : 1;
  const { posts, totalPosts } = await fetchPosts(currentPage);
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <Search posts={posts} />
      <div className="flex justify-between mt-4">
        {currentPage > 1 && (
          <Link href={`/?page=${currentPage - 1}`}>
            <span className="text-blue-500 hover:underline">Previous</span>
          </Link>
        )}
        {currentPage < totalPages && (
          <Link href={`/?page=${currentPage + 1}`}>
            <span className="text-blue-500 hover:underline">Next</span>
          </Link>
        )}
      </div>
    </div>
  );
}
