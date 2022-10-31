import { useEffect, useState } from 'react';
import { Header } from '../components/Header/Header';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { cookies, getUserInfo } from '../api';
import { IUser } from '../interfaces/user';

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    (async () => {
      const token = cookies.get('token');
      if (!token) return;
      const userInfo = await getUserInfo(token);
      setUser(userInfo);
    })();
  }, [Component]);

  return (
    <>
      <Header user={user} />
      <main className="main">
        <Component {...pageProps} />
      </main>
    </>
  );
}
