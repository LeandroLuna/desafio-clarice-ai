'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface SearchProps {
  posts: Post[];
}

const Search: React.FC<SearchProps> = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id} className="mb-4">
            <Link href={`/posts/${post.id}`}>
              <h2 className="text-xl font-semibold text-blue-500 hover:underline">
                {post.title}
              </h2>
              <p>{post.body.slice(0, 50)}...</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
