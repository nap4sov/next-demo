import Image from 'next/image';
import { IUser } from '../../interfaces/user';
import { UserInfo } from '../UserInfo';
import { useRouter } from 'next/router';

export const MainInfo: React.FC<{ user: IUser }> = ({ user }) => {
  const router = useRouter();
  return (
    <div className="main-info">
      <div>
        <h1>Welcome, {user.name}</h1>
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
      <UserInfo user={user} />
    </div>
  );
};
