import { DadJokes } from '../components/DadJokes';
import { getJokes } from '../api';
import { Meta } from '../components/Meta';
import { Environment, Lightformer, Sky, Sparkles } from '@react-three/drei';
import { CanvasRoot } from '../components/Canvas';
interface IProps {
  jokes: { id: string; joke: string }[];
}

const Jokez: React.FC<IProps> = ({ jokes }) => {
  return (
    <>
      <Meta title="Dad jokez" description={jokes[0].joke} />
      <DadJokes jokes={jokes} />
      <CanvasRoot>
        <Environment
          background
          near={1}
          far={1000}
          resolution={256}
          preset="apartment"
        />
        <Sparkles count={500} size={5} scale={15} />
      </CanvasRoot>
    </>
  );
};

export default Jokez;

export const getServerSideProps = async () => {
  const jokes = await getJokes();
  return {
    props: {
      jokes,
    },
  };
};
