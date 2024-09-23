'use client';

import { useState, useEffect } from 'react';
import Search from './_components/Search';
import PostItem from './_components/PostItem';
import { fetchPosts } from './_services/postService';
import Link from 'next/link';
import { Post } from './_interfaces/Post';
import { POSTS_PER_PAGE } from './_lib/constants';

export default function ClientHome({ page }: { page: number }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [totalPosts, setTotalPosts] = useState(0);
  
  useEffect(() => {
    const loadPosts = async () => {
      const { posts, totalPosts } = await fetchPosts(page, POSTS_PER_PAGE);
      setPosts(posts);
      setFilteredPosts(posts);
      setTotalPosts(totalPosts);
    };
    loadPosts();
  }, [page]);

  const handleSearch = (filtered: Post[]) => {
    setFilteredPosts(filtered);
  };

  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <Search posts={posts} onSearch={handleSearch} />
      <ul>
        {filteredPosts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
      <div className="flex justify-between">
        {page > 1 && (
          <Link href={`/?page=${page - 1}`}>
            <span className="text-blue-500 hover:underline">Previous</span>
          </Link>
        )}
        {page < totalPages && (
          <Link href={`/?page=${page + 1}`}>
            <span className="text-blue-500 hover:underline">Next</span>
          </Link>
        )}
      </div>
    </div>
  );
}
