'use client';

import { useState } from 'react';
import { Post } from '../_interfaces/Post';

interface SearchProps {
    posts: Post[],
    onSearch: (filteredPosts: Post[]) => void;
}

const Search: React.FC<SearchProps> = ({ posts, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term: string) => {
      const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(term.toLowerCase())
      );
      onSearch(filteredPosts);
    };

    return (
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          handleSearch(e.target.value);
        }}
        className="mb-4 p-2 border border-gray-300 rounded"
      />
    );
};

export default Search;