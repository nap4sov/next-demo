import Link from 'next/link';
import { IPost } from '../../interfaces/posts';
import styles from '../../styles/Posts.module.scss';

interface IProps {
  post: IPost;
}

export const PostItem: React.FC<IProps> = ({
  post: { _id, title, description },
}) => {
  return (
    <li>
      <Link href={'/posts/' + _id} className={styles.card}>
        <h2>&#5125; {title}</h2>
        <p>{description}</p>
      </Link>
    </li>
  );
};
