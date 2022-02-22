import { Link, useLoaderData } from "remix";
import { getPosts } from "~/post";
import type { Post } from "~/post";

export const loader = () => {
  return getPosts();
};

export default function Posts() {
  const posts = useLoaderData<Post[]>();
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li className="post" key={post.uid}>
              <div className="post-content">
                <span className="date">
                  {new Date(post.date).toLocaleDateString("ja-JP")}
                </span>
                <Link to={post.uid}>{post.title}</Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
