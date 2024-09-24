import { fetchPosts } from './_services/postService';
import ClientHome from './_components/ClientHome';
import { POSTS_PER_PAGE } from './_lib/constants';

export default async function Home({ searchParams }: { searchParams: { page?: string } }) {
  const page = searchParams.page ? Number(searchParams.page) : 1;
  const { posts } = await fetchPosts(page, POSTS_PER_PAGE);

  return <ClientHome posts={posts} />;
}