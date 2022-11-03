import Link from 'next/link';
import { useRouter } from 'next/router';
import { NAV_ROUTES } from '../../constants/navRoutes';
import styles from '../../styles/Header.module.scss';

export const NavBar: React.FC = () => {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      {NAV_ROUTES.map(({ label, route }) => (
        <Link
          key={label}
          href={route}
          className={router.asPath === route ? styles.activeLink : styles.link}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};
