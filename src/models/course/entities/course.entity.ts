import { Column, HasMany, Table } from 'sequelize-typescript';
import { BaseEntity } from 'src/common/entities/base-entity';
import { Topic } from 'src/models/topic/entities/topic.entity';

@Table({ tableName: 'courses' })
export class Course extends BaseEntity {
  @Column
  title: string;

  @Column
  description: string;

  @HasMany(() => Topic)
  topics: Topic[];
}
