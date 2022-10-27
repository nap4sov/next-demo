import { IPostDetails } from '../../interfaces/posts';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Posts.module.css';

export const PostDetails: React.FC<{ post: IPostDetails }> = ({
  post: { title, description, fullText, postedBy, likes, dateCreated },
}) => {
  return (
    <div className={styles.wrapper}>
      <h2>{title}</h2>
      <h3>{description}</h3>
      <Image
        src="/image.png"
        alt="image"
        width="500"
        height="250"
        className={styles.image}
      />
      <p>{fullText}</p>
      <p>Author: {postedBy ? postedBy : 'anonymous'}</p>
      <div className={styles.flexWrapper}>
        <p>{likes.length} likes</p>
        <p>{dateCreated}</p>
        <Link href="/posts">&#5130; Back</Link>
      </div>
    </div>
  );
};
