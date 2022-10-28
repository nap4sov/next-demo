import { DadJokes } from '../components/DadJokes';
import { getJokes } from '../api';

interface IProps {
  jokes: { id: string; joke: string }[];
}

const Jokez: React.FC<IProps> = ({ jokes }) => {
  return <DadJokes jokes={jokes} />;
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
