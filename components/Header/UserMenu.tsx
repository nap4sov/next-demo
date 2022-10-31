import { cookies } from '../../api';
import { useRouter } from 'next/router';
import styles from '../../styles/Header.module.scss';

interface IUser {
  name: string;
  email: string;
}

export const UserMenu: React.FC<{ user: IUser | undefined }> = ({ user }) => {
  const router = useRouter();
  return (
    <div className={styles.userMenu}>
      {user?.email && (
        <button
          className={styles.button}
          onClick={() => {
            cookies.remove('token');
            console.log(cookies);

            router.reload();
          }}
        >
          Log Out
        </button>
      )}
    </div>
  );
};
