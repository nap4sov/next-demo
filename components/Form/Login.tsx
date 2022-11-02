import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import { logIn } from '../../api';
import { signIn } from 'next-auth/react';
import styles from '../../styles/Form.module.css';

interface Inputs {
  email: string;
  password: string;
}

export const Login: React.FC = () => {
  return (
    <div className={styles.buttonWrapper}>
      <button onClick={() => signIn('google')} className={styles.button}>
        Sign in with Google
      </button>
      <button onClick={() => signIn('github')} className={styles.button}>
        Sign in with GitHub
      </button>
    </div>
  );
};
