import { ILaunch } from '../../graphql/interfaces';
// import YouTube from 'react-youtube';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Launch.module.scss';

export const LaunchItem: React.FC<{ launch: ILaunch }> = ({
  launch: { mission_name, rocket, links, details, launch_success, launch_year },
}) => {
  // const embedId = links.video_link.split('/').pop();
  // const opts = {
  //   width: '480px',
  //   height: '320px',
  //   playerVars: {
  //     autoplay: 0,
  //   },
  // };

  return (
    <div className={styles.wrapper}>
      {links.mission_patch_small && (
        <Image
          src={links.mission_patch_small}
          alt="mission patch"
          width="100"
          height="100"
          className={styles.logo}
        />
      )}
      <h2 className={styles.title}>
        {mission_name} <span>&#5125; {rocket.rocket_name}</span>
      </h2>
      <p className={styles.info}>
        {launch_year}, {launch_success ? 'Successful' : 'Failed'}
      </p>
      <p className={styles.details}>{details ? details : null}</p>

      <div className={styles.flexWrap}>
        {links.article_link && (
          <Link
            href={links.article_link}
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            Article link
          </Link>
        )}
        <Link
          href={links.video_link}
          className={styles.youtubeLink}
          target="_blank"
          rel="noreferrer"
        >
          YouTube
        </Link>
        {/* <YouTube videoId={embedId} opts={opts} className={styles.video} /> */}
      </div>
    </div>
  );
};
