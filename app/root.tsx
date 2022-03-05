import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';
import type { MetaFunction } from 'remix';
import type { LinksFunction } from 'remix';


export const links: LinksFunction = () => {
  return [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/assets/favicon-32x32.png',
    },
    {
      rel: 'stylesheet',
      href: '/styles/index.css'
    }
  ];
};

export const meta: MetaFunction = () => {
  return { title: 'Frontend Mentor | Meet landing page' };
};

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
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
