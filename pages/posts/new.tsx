import { Stars } from '@react-three/drei';
import { GetServerSidePropsContext } from 'next';
import { getUserInfo } from '../../api';
import { CanvasRoot } from '../../components/Canvas';
import { NewPost } from '../../components/Form/NewPost';
import { IUser } from '../../interfaces/user';

const New: React.FC<{ user: IUser }> = ({ user }) => {
  return (
    <>
      <NewPost />
      <CanvasRoot className="dark">
        <Stars />
      </CanvasRoot>
    </>
  );
};

export default New;

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const token = await context.req.cookies['token'];
  const user = await getUserInfo(token as string);

  if (!user._id)
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };

  return {
    props: {
      user,
    },
  };
};
