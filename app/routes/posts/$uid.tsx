/* eslint-disable react/no-danger */
import { useLoaderData } from "remix";
import type { LoaderFunction, MetaFunction } from "remix";
import { getPost } from "~/post";

export const loader: LoaderFunction = async ({ params }) => {
  return getPost(params.uid);
};

export const meta: MetaFunction = ({ data }) => {
  return {
    title: `${data.title} | K41531`
  };
};

export default function PostSlug() {
  const post = useLoaderData();
  return (
    <div>
      <article dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
}
