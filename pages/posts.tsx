import { PostsList } from '../components/Posts/PostsList';
import { IPost } from '../interfaces/posts';
import { getAllPosts } from '../api';
import { Meta } from '../components/Meta';

interface IProps {
  posts: IPost[];
}
const Posts: React.FC<IProps> = ({ posts }) => {
  return (
    <>
      <Meta title="Posts" description="A lot of meaningless posts" />
      <PostsList posts={posts} />
    </>
  );
};

export const getServerSideProps = async (): Promise<{ props: IProps }> => {
  const response = await getAllPosts();
  return {
    props: {
      posts: response.data,
    },
  };
};

export default Posts;
