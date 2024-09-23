import Link from 'next/link';
import { Post } from '../_interfaces/Post';

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => (
    <li className="mb-4">
      <Link href={`/posts/${post.id}`}>
        <h2 className="text-xl font-semibold text-blue-500 hover:underline">
          {post.title}
        </h2>
        <p>{post.body.slice(0, 50)}...</p>
      </Link>
    </li>
);

export default PostItem;
