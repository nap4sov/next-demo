import styles from '../../styles/Header.module.css';

interface IUser {
  name: string;
  email: string;
}

export const UserMenu: React.FC<{ user: IUser | undefined }> = ({ user }) => {
  return (
    <div className={styles.userMenu}>
      {user?.email ? (
        <>
          <p>{user.name}</p>
          <button className={styles.button}>Log Out</button>
        </>
      ) : (
        <button className={styles.button}>Log In</button>
      )}
    </div>
  );
};
