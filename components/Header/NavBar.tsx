import Link from 'next/link';
import { NAV_ROUTES } from '../../constants/navRoutes';
import styles from '../../styles/Header.module.css';

export const NavBar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      {NAV_ROUTES.map(route => (
        <Link key={route.label} href={route.route} className={styles.link}>
          {route.label}
        </Link>
      ))}
    </nav>
  );
};
