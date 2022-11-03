interface ILinks {
  article_link: string | null;
  video_link: string;
  flickr_images: string[];
  mission_patch_small: string;
}

interface IRocket {
  rocket_name: string;
}

export interface ILaunch {
  mission_name: string;
  links: ILinks;
  rocket: IRocket;
  details: string | null;
  launch_success: boolean;
  launch_year: string;
  id: string;
}

export interface ILaunchesQuery {
  launchesPast: ILaunch[];
}
