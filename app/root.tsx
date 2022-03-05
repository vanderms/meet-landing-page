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
import Favicon from './assets/favicon-32x32.png';
import globalStyles from './styles/index.css';


export const links: LinksFunction = () => {
  return [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: Favicon,
    },
    {
      rel: 'stylesheet',
      href: globalStyles
    }
  ];
};

export const meta: MetaFunction = () => {
  return { title: 'New Remix App' };
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
