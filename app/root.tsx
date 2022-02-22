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
        <meta
          name="google-site-verification"
          content="rRGxDWrVJ86JECO5VCy7YiC-ofE6ExjwFZnB5y6Wh-Q"
        />
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
