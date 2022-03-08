import { getPosts } from "~/post";
import { Link, useLoaderData } from "remix";
import type { Post } from "~/post";

export const loader = () => {
  return getPosts(5);
};
export default function Index() {
  const posts = useLoaderData<Post[]>();

  return (
    <div>
      <h1>Hello, world!</h1>
      <p>My name is Kaisei.</p>
      <section>
        <h2>Recently Posts</h2>
        <ul>
          {posts.map((post) => {
            return (
              <li className="post" key={post.uid}>
                <div className="post-content">
                  <span className="date">
                    {new Date(post.date).toLocaleDateString("ja-JP")}
                  </span>
                  <Link to={"posts/" + post.uid}>{post.title}</Link>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
