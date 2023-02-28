import { Injectable } from '@nestjs/common';
import { TopicDto } from './dto/topic.dto';
import { TopicRepository } from './topic.repository';

@Injectable()
export class TopicService {
  constructor(private topicRepository: TopicRepository) { }
  create(topicDto: TopicDto) {
    return this.topicRepository.create(topicDto);
  }

  findAll() {
    return this.topicRepository.findAll();
  }

  findOne(id: string) {
    return this.topicRepository.findOne(id);
  }

  update(id: string, topicDto: TopicDto) {
    return this.topicRepository.update(id, topicDto);
  }

  remove(id: string) {
    return this.topicRepository.remove(id);
  }
}
