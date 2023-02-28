import { BelongsTo, Column, ForeignKey, Table } from 'sequelize-typescript';
import { Topic } from 'src/models/topic/entities/topic.entity';
import { Class } from '../../class';

@Table({ tableName: 'videos' })
export class Video extends Class {
  @Column
  duration: number;

  @ForeignKey(() => Topic)
  @Column({ field: 'topic_id', })
  topicId: string;

  @BelongsTo(() => Topic, { foreignKey: 'topic_id' })
  topic: Topic;
}
