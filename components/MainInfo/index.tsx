import Image from 'next/image';
import { IUser } from '../../interfaces/user';
import { UserInfo } from '../UserInfo';

export const MainInfo: React.FC<{ user: IUser }> = ({ user }) => {
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
        />
      </div>
      <UserInfo user={user} />
    </div>
  );
};
