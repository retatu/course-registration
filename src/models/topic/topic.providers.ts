import { Topic } from './entities/topic.entity';

export const topicProviders = [
  {
    provide: 'TOPIC_REPOSITORY',
    useValue: Topic,
  },
];