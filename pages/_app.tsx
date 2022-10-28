import { SWRConfig } from 'swr';
import { useEffect, useState } from 'react';
import { Header } from '../components/Header/Header';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { cookies, getUserInfo } from '../api';

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<{
    name: string;
    email: string;
  }>();

  useEffect(() => {
    (async () => {
      const token = cookies.get('token');
      if (!token) return;
      const { name, email } = await getUserInfo(token);
      setUser({ name, email });
    })();
  });

  return (
    <SWRConfig value={{ provider: () => new Map() }}>
      <Header user={user} />
      <main className="main">
        <Component {...pageProps} user={user} />
      </main>
    </SWRConfig>
  );
}
