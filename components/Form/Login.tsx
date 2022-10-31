import { LOGIN_FIELDS } from '../../constants/signupInfo';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import { logIn } from '../../api';
import styles from '../../styles/Form.module.css';

interface Inputs {
  email: string;
  password: string;
}

export const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const router = useRouter();
  const onSubmit: SubmitHandler<Inputs> = async data => {
    await logIn(data);
    router.reload();
  };

  return (
    <div>
      {LOGIN_FIELDS.map(field => (
        <div key={field.label} className={styles.wrap}>
          <input
            className={styles.input}
            type={field.type}
            id={field.type}
            {...register(field.type === 'email' ? 'email' : 'password')}
          />
          <label htmlFor={field.type} className={styles.label}>
            {field.label}
          </label>
        </div>
      ))}
      <button
        type="submit"
        onClick={handleSubmit(onSubmit)}
        className={styles.button}
      >
        Log In
      </button>
    </div>
  );
};
