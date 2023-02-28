import { Video } from './entities/video.entity';

export const videoProviders = [
  {
    provide: 'VIDEO_REPOSITORY',
    useValue: Video,
  },
];