import { LOGIN_FIELDS } from '../../constants/signupInfo';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import { logIn } from '../../api';
import { redirect } from 'next/dist/server/api-utils';

interface Inputs {
  email: string;
  password: string;
}

export const Login: React.FC = () => {
  const { register, formState, handleSubmit } = useForm<Inputs>();
  const router = useRouter();
  const onSubmit: SubmitHandler<Inputs> = async data => {
    await logIn(data);
    // router.push('/posts');
    router.reload();
  };

  return (
    <div>
      {LOGIN_FIELDS.map(field => (
        <div key={field.label}>
          <input
            type={field.type}
            id={field.type}
            {...register(field.type === 'email' ? 'email' : 'password')}
          />
          <label htmlFor={field.type}>{field.label}</label>
        </div>
      ))}
      <button type="submit" onClick={handleSubmit(onSubmit)}>
        Log In
      </button>
    </div>
  );
};
