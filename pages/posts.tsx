import { PostsList } from '../components/Posts/PostsList';
import { IPost } from '../interfaces/posts';
import { getPaginatedPosts } from '../api';
import { Meta } from '../components/Meta';
import { Stars } from '@react-three/drei';
import { CanvasRoot } from '../components/Canvas';
import { SWRConfig, unstable_serialize } from 'swr';
import { POSTS } from '../constants/SWRkeys';

interface IProps {
  fallback: { [x: string]: IPost[] };
}

const Posts: React.FC<IProps> = ({ fallback }) => {
  return (
    <>
      <Meta title="Posts" description="A lot of meaningless posts" />
      <SWRConfig value={{ fallback }}>
        <PostsList />
      </SWRConfig>
      <CanvasRoot className="dark">
        <Stars />
      </CanvasRoot>
    </>
  );
};

export const getStaticProps = async (): Promise<{ props: IProps }> => {
  const response = await getPaginatedPosts(POSTS, 1);
  return {
    props: {
      fallback: {
        [unstable_serialize([POSTS, 1])]: response,
      },
    },
  };
};

export default Posts;
