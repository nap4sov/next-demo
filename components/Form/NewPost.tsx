import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { createPost } from '../../api';
import { config, POST_FIELDS } from '../../constants/postInfo';
import { IInputs } from '../../constants/postInfo';
import styles from '../../styles/Form.module.scss';

export const NewPost: React.FC = () => {
  const { register, formState, handleSubmit } = useForm<IInputs>(config);
  const { data: sessionData } = useSession();
  const router = useRouter();

  const onSubmit: SubmitHandler<IInputs> = async (data, event) => {
    event?.target.setAttribute('disabled', true);
    const postedBy = sessionData && sessionData.user && sessionData.user.name;
    const result = await createPost(
      postedBy
        ? {
            ...data,
            postedBy,
          }
        : data,
    );
    if (!result) {
      event?.target.setAttribute('disabled', false);
      return;
    }

    router.push('/posts');
  };

  return (
    <div>
      {POST_FIELDS.map(field => {
        const key = field.type as keyof IInputs;
        return (
          <div className={styles.wrap} key={field.type}>
            {field.type === 'fullText' ? (
              <textarea
                className={styles.postInput}
                id={field.type}
                {...register(key)}
              />
            ) : (
              <input
                className={styles.postInput}
                type="text"
                id={field.type}
                {...register(key)}
              />
            )}
            <label
              htmlFor={field.type}
              className={
                formState.errors[key] ? styles.errorLabel : styles.postLabel
              }
            >
              {formState.errors[key]
                ? formState.errors[key]?.message
                : field.label}
            </label>
          </div>
        );
      })}

      <button
        type="submit"
        onClick={handleSubmit(onSubmit)}
        className={styles.postButton}
      >
        Create post
      </button>
    </div>
  );
};
