import { notFound } from 'next/navigation';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface User {
  id: number;
  name: string;
}

const fetchPost = async (id: string) => {
  try {
    const res = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.data;
  } catch (error) {
    return null;
  }
};

const fetchUser = async (userId: number) => {
  try {
    const res = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return res.data;
  } catch (error) {
    return null;
  }
};

interface PostPageProps {
  params: { id: string };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await fetchPost(params.id);

  if (!post) {
    notFound();
  }

  const user = await fetchUser(post.userId);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p>{post.body}</p>
      {user && <p className="mt-4 text-sm text-gray-600">By: {user.name}</p>}
      <a href="/" className="text-blue-500 hover:underline mt-4 block">Back to Blog</a>
    </div>
  );
}
