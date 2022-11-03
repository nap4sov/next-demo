// import { client } from '../graphql/apolloClient';
// import { GET_LAUNCHES } from '../graphql/queries';
// import { ILaunchesQuery } from '../graphql/interfaces';
import { Meta } from '../components/Meta';
import { LaunchesList } from '../components/Launches/LaunchesList';
import { CanvasRoot } from '../components/Canvas';
import { Stars } from '@react-three/drei';

const Launches: React.FC = () => {
  return (
    <>
      <Meta title="SpaceX Launches" description="SpaceX past launches" />
      <LaunchesList />
      <CanvasRoot className="dark">
        <Stars />
      </CanvasRoot>
    </>
  );
};

export default Launches;

// export const getServerSideProps = async () => {
//   const { data } = await client.query<ILaunchesQuery>({
//     query: GET_LAUNCHES,
//   });

//   return {
//     props: {
//       data,
//     },
//   };
// };
