import * as prismicH from "@prismicio/helpers";
import { client } from "./prismic";

export type Post = {
  slug: string;
  title: string;
};

export type PostMarkdownAttributes = {
  title: string;
};

export async function getPost(uid: string | undefined) {
  if (!uid) return { slug: "undefined", title: "undefined", text: "undefined" };
  const document = await client.getByUID("post", uid);
  const title = prismicH.asText(document.data.title);
  const text = prismicH.asText(document.data.text);
  const slug = document.slugs[0];

  return { slug, title, text };
}

export async function getPosts() {
  const documents: Array<any> = await client.getAllByType("post");
  return documents.map((document) => {
    return {
      uid: document.uid,
      slug: document.slugs[0],
      title: prismicH.asText(document.data.title)
    };
  });
}
