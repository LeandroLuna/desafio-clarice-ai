import Search from './_components/Search';
import PostItem from './_components/PostItem';
import { fetchPosts } from './_services/postService';
import Link from 'next/link';
import { Post } from './_interfaces/Post';
import { POSTS_PER_PAGE } from './_lib/constants';

export default async function Home({ searchParams }: { searchParams: { page: string } }) {
  const currentPage = searchParams.page ? Number(searchParams.page) : 1;
  const { posts, totalPosts } = await fetchPosts(currentPage, POSTS_PER_PAGE);
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <Search posts={posts} />
      <ul>
        {posts && posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
      <div className="flex justify-between">
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
