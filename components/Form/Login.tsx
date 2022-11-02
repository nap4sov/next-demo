import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { SIGNIN_OPTIONS } from '../../constants/signupInfo';
import styles from '../../styles/Form.module.scss';

export const Login: React.FC = () => {
  return (
    <div className={styles.buttonWrapper}>
      {SIGNIN_OPTIONS.map(({ label, path, provider }) => (
        <button
          onClick={() => signIn(provider)}
          className={styles.button}
          key={provider}
        >
          {label}
          <Image src={path} alt={provider} width="40" height="40" priority />
        </button>
      ))}
    </div>
  );
};
