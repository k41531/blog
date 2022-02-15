import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";
import styles from "~/styles/global.css";
import Layout from "./components/layout";

export const meta: MetaFunction = () => {
  return {
    title: "k41531-blog",
    description:
      "This is Kaisei’s blog about IT. And sometimes I may write essays too."
  };
};
export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://cdn.simplecss.org/simple.min.css"
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous"
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap",
      rel: "stylesheet"
    },
    {
      rel: "stylesheet",
      href: styles
    }
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
        </Layout>
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
