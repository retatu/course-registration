import { Module } from '@nestjs/common';
import { TopicService } from './topic.service';
import { TopicController } from './topic.controller';
import { TopicRepository } from './topic.repository';
import { topicProviders } from './topic.providers';

@Module({
  controllers: [TopicController],
  providers: [TopicService, TopicRepository, ...topicProviders]
})
export class TopicModule {}
