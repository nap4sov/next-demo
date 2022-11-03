import { LaunchItem } from './LaunchItem';
import { useQuery } from '@apollo/client';
import { ILaunchesQuery } from '../../graphql/interfaces';
import { GET_LAUNCHES } from '../../graphql/queries';
import styles from '../../styles/Launch.module.scss';
import { useInView } from 'react-intersection-observer';

export const LaunchesList: React.FC = () => {
  const { data, fetchMore } = useQuery<ILaunchesQuery>(GET_LAUNCHES);
  const launches = data ? data.launchesPast : [];

  const { ref } = useInView({
    rootMargin: '250px',
    onChange: inView => {
      if (launches.length === 0 || !inView) return;

      fetchMore({
        variables: {
          offset: launches.length,
        },
      });
    },
  });

  return (
    <>
      <ul>
        {launches.map(launch => (
          <li key={launch.id} className={styles.item}>
            <LaunchItem launch={launch} />
          </li>
        ))}
      </ul>
      <div ref={ref} />
    </>
  );
};
