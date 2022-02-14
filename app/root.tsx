import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";
import Layout from "./components/layout";

export const meta: MetaFunction = () => {
  return {
    title: "k41531-blog",
    description:
      "This is Kaisei’s blog about IT. And sometimes I may write essays too."
  };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.simplecss.org/simple.min.css"
        />
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
