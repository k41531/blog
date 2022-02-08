import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { getPost } from "~/post";

export const loader: LoaderFunction = async ({ params }) => {
  return getPost(params.uid);
};

export default function PostSlug() {
  const post = useLoaderData();
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.text}</p>
    </div>
  );
}
