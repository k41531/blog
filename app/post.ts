import * as prismicH from "@prismicio/helpers";
import { marked } from "marked";
import { client } from "./prismic";

export type Post = {
  uid: string;
  title: string;
  date: Date;
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

export async function getPosts(num: number = 20) {
  const documents = await client.getByType("post", {
    orderings: { field: "my.post.release_date", direction: "desc" },
    pageSize: num,
    page: 1
  });
  return documents.results.map((document) => {
    return {
      uid: document.uid,
      title: prismicH.asText(document.data.title),
      date: prismicH.asDate(document.data.release_date)
    };
  });
}
