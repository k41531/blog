import {
  Link,
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
  return { title: "New Remix App" };
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
        <Link to="/posts">Posts</Link>
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
