import Link from 'next/link';

import styles from '../../styles/Header.module.css';

export const NavBar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.link}>
        Home
      </Link>
      <Link href="/posts" className={styles.link}>
        Posts
      </Link>
    </nav>
  );
};
