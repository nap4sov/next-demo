import { gql } from '@apollo/client';

export const GET_LAUNCHES = gql`
  query Query($offset: Int) {
    launchesPast(limit: 5, offset: $offset) {
      mission_name
      id
      details
      launch_success
      launch_year
      rocket {
        rocket_name
      }
      links {
        article_link
        video_link
        flickr_images
        mission_patch_small
      }
    }
  }
`;
