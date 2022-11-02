import Image from 'next/image';
// import { UserInfo } from '../UserInfo';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

export const MainInfo: React.FC = () => {
  const { data } = useSession();
  const router = useRouter();

  return (
    <div className="main-info">
      <div>
        <h1>Welcome, {data?.user?.name}</h1>
        <Image
          src="/blog-icon.png"
          alt="home icon"
          width="150"
          height="150"
          priority
          onClick={() => router.push('/posts/new')}
          className="blog-img"
        />
      </div>
      {/* <UserInfo /> */}
    </div>
  );
};
