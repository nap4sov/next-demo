import { Header } from '../components/Header/Header';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';

import { SessionProvider } from 'next-auth/react';
import { ApolloProvider } from '@apollo/client';
import { client } from '../graphql/apolloClient';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <SessionProvider session={pageProps.session}>
        <Header />
        <main className="main">
          <Component {...pageProps} />
        </main>
      </SessionProvider>
    </ApolloProvider>
  );
}
