import { Meta } from '../components/Meta';
import { CanvasRoot } from '../components/Canvas';
import { MainInfo } from '../components/MainInfo';
import { Cloud, Sparkles, Sky } from '@react-three/drei';
import { Login } from '../components/Form/Login';
import { useSession } from 'next-auth/react';

const Home: React.FC = () => {
  const { data } = useSession();

  return (
    <>
      <Meta title="* Homepage *" description="lorem ipsum" />
      {data?.user?.name ? <MainInfo /> : <Login />}

      <CanvasRoot>
        <Sky azimuth={0.5} distance={11000} sunPosition={[0, 1, 1]} />
        <Cloud opacity={0.3} speed={0.2} width={8} depth={3} segments={20} />
        <Sparkles count={300} size={2} scale={20} color={1} />
      </CanvasRoot>
    </>
  );
};

export default Home;

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext,
// ) => {
//   const token = await context.req.cookies['token'];
//   const user = await getUserInfo(token as string);

//   return {
//     props: {
//       user,
//     },
//   };
// };
