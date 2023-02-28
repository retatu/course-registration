import { BelongsTo, Column, ForeignKey, HasMany, Table } from 'sequelize-typescript';
import { BaseEntity } from 'src/common/entities/base-entity';
import { Video } from 'src/models/class/video/entities/video.entity';
import { Course } from 'src/models/course/entities/course.entity';

@Table({ tableName: 'topics' })
export class Topic extends BaseEntity {
  @Column
  name: string;

  @HasMany(() => Video)
  videos: Video[];

  @ForeignKey(() => Course)
  @Column({ field: 'course_id' })
  courseId: string;

  @BelongsTo(() => Course, { foreignKey: 'course_id' })
  course: Course;
}
