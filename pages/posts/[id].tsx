import { PostDetails } from '../../components/Posts/PostDetails';
import { Meta } from '../../components/Meta';
import { getPostDetails, getAllPosts } from '../../api';
import { IPostDetails } from '../../interfaces/posts';

const Post: React.FC<{ post: IPostDetails }> = ({ post }) => {
  return (
    <>
      <Meta title={post.title} description={post.description} />
      <PostDetails post={post} />
    </>
  );
};

export default Post;

export const getStaticProps = async (context: { params: { id: string } }) => {
  const post = await getPostDetails(context.params.id);
  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async () => {
  const { data } = await getAllPosts();

  return {
    paths: data.reduce<{ params: { id: string } }[]>((acc, post) => {
      return [...acc, { params: { id: post._id } }];
    }, []),
    fallback: false,
  };
};
