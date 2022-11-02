import { NavBar } from './NavBar';
import styles from '../../styles/Header.module.scss';
import { UserMenu } from './UserMenu';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <NavBar />
      <UserMenu />
    </header>
  );
};
