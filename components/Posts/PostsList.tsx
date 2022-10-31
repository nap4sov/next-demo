import { PostItem } from './PostItem';
import useSWRInfinite, { SWRInfiniteKeyLoader } from 'swr/infinite';
import { getPaginatedPosts } from '../../api';
import { POSTS } from '../../constants/SWRkeys';
import styles from '../../styles/Posts.module.scss';

const getKey: SWRInfiniteKeyLoader = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null; // reached the end
  return [POSTS, pageIndex === 0 ? 1 : pageIndex];
};

export const PostsList: React.FC = () => {
  const { data, size, setSize } = useSWRInfinite(getKey, getPaginatedPosts);

  const noMoreData = data && data[data?.length - 1].length < 10;

  return (
    <>
      <ul className={styles.grid}>
        {data?.map(page => {
          return page.map(post => <PostItem post={post} key={post._id} />);
        })}
      </ul>
      {!noMoreData && (
        <button onClick={() => setSize(size + 1)} className={styles.button}>
          Load more
        </button>
      )}
    </>
  );
};
