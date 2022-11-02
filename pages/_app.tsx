import { Header } from '../components/Header/Header';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';

import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Header />
      <main className="main">
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}
