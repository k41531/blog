import * as prismicH from "@prismicio/helpers";
import { marked } from "marked";
import { client } from "./prismic";

export type Post = {
  uid: string;
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
  const html = marked(text || "");

  return { slug, title, html };
}

export async function getPosts() {
  const documents: Array<any> = await client.getAllByType("post");
  return documents.map((document) => {
    return {
      uid: document.uid,
      title: prismicH.asText(document.data.title)
    };
  });
}
