import { PostItem } from './PostItem';
import styles from '../../styles/Posts.module.css';
import { IPost } from '../../interfaces/posts';

interface IProps {
  posts: IPost[];
}

export const PostsList: React.FC<IProps> = ({ posts }) => {
  return (
    <ul className={styles.grid}>
      {posts?.map(post => (
        <PostItem post={post} key={post._id} />
      ))}
    </ul>
  );
};
