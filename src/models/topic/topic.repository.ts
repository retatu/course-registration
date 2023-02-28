import { Inject, Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/common/repository/base-repository';
import { TopicDto } from './dto/topic.dto';
import { Topic } from './entities/topic.entity';

@Injectable()
export class TopicRepository implements BaseRepository<TopicDto, Topic> {
  constructor(
    @Inject('TOPIC_REPOSITORY')
    private topicRepository: typeof Topic
  ) { }
  create(dto: TopicDto): Promise<Topic> {
    return this.topicRepository.create({ ...dto });
  }
  findAll(): Promise<Topic[]> {
    return this.topicRepository.findAll({ include: ['videos'] });
  }
  findOne(id: string): Promise<Topic> {
    return this.topicRepository.findByPk(id);
  }
  async update(id: string, dto: TopicDto): Promise<Topic> {
    const result = await this.topicRepository.update(dto, { where: { id }, returning: true });
    return result[1][0];
  }
  remove(id: string): void {
    this.topicRepository.destroy({ where: { id } });
  }

}