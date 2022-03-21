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
import { PrismicProvider } from "@prismicio/react";
import Layout from "./components/layout";

import { client } from "./prismic";

export const meta: MetaFunction = () => {
  return {
    title: "k41531 | blog",
    description:
      "主にIT関連の物事を取り扱った個人的なブログです。低レイヤーから高レイヤーまで手広く触れます。"
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
        <PrismicProvider client={client}>
          <Layout>
            <Outlet />
            <ScrollRestoration />
            <Scripts />
          </Layout>
          {process.env.NODE_ENV === "development" && <LiveReload />}
        </PrismicProvider>
      </body>
    </html>
  );
}
