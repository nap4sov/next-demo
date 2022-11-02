import { getSession } from 'next-auth/react';
import { GetServerSidePropsContext } from 'next/types';
import { NewPost } from '../../components/Form/NewPost';
import { Stars } from '@react-three/drei';
import { CanvasRoot } from '../../components/Canvas';

const New: React.FC = () => {
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
  const session = await getSession(context);

  if (!session)
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };

  return {
    props: {},
  };
};
