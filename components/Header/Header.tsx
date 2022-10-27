import { NavBar } from './NavBar';
import styles from '../../styles/Header.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <NavBar />
    </header>
  );
};
