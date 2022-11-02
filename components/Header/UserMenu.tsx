import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import styles from '../../styles/Header.module.scss';

export const UserMenu: React.FC = () => {
  const { data } = useSession();

  if (!data?.user?.name) return null;

  return (
    <div className={styles.userMenu}>
      <Image
        src={data?.user?.image as string}
        alt="user"
        width="50"
        height="50"
      />
      <button onClick={() => signOut()} className={styles.button}>
        Sign Out
      </button>
    </div>
  );
};
