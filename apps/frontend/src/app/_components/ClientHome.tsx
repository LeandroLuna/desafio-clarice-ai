'use client';

import { useState } from 'react';
import Search from './Search';
import PostItem from './PostItem';
import { Post } from '../_interfaces/Post';

interface ClientHomeProps {
  posts: Post[];
}

const ClientHome: React.FC<ClientHomeProps> = ({ posts }) => {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <Search posts={posts} setFilteredPosts={setFilteredPosts} />
      <ul>
        {filteredPosts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default ClientHome;
