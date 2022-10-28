import { NavBar } from './NavBar';
import styles from '../../styles/Header.module.css';
import { UserMenu } from './UserMenu';

interface IUser {
  name: string;
  email: string;
}

export const Header: React.FC<{ user: IUser | undefined }> = ({ user }) => {
  return (
    <header className={styles.header}>
      <NavBar />
      <UserMenu user={user} />
    </header>
  );
};
