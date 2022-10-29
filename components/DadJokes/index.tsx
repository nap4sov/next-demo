import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.min.css';
import { useEffect } from 'react';

interface IProps {
  jokes: { id: string; joke: string }[];
}

export const DadJokes: React.FC<IProps> = ({ jokes }) => {
  useEffect(() => {
    const serializedData = jokes.map(({ joke }) => {
      return {
        w: 3,
        h: 3,
        content: joke,
      };
    }, []);
    const jokeGrid = GridStack.init({ removable: true });
    jokeGrid?.load(serializedData);
  });
  return <div className="grid-stack jokes"></div>;
};
