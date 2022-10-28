import { LOGIN_FIELDS } from '../../constants/signupInfo';
import { useForm, SubmitHandler } from 'react-hook-form';
import { logIn } from '../../api';

interface Inputs {
  email: string;
  password: string;
}

export const Login: React.FC = () => {
  const { register, formState, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async data => {
    const res = await logIn(data);
    console.log(res);
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
