import { Inject, Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/common/repository/base-repository';
import { Video } from '../class/video/entities/video.entity';
import { Topic } from '../topic/entities/topic.entity';
import { CourseDto } from './dto/course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CourseRepository implements BaseRepository<CourseDto, Course>{
  constructor(
    @Inject('COURSE_REPOSITORY')
    private courseRepository: typeof Course
  ) { }

  create(dto: CourseDto): Promise<Course> {
    return this.courseRepository.create({ ...dto });
  }
  findAll(): Promise<Course[]> {
    return this.courseRepository.findAll({ include: [{ model: Topic, include: ['videos'] }] });
  }
  findOne(id: string): Promise<Course> {
    return this.courseRepository.findByPk(id);
  }
  async update(id: string, dto: CourseDto): Promise<Course> {
    const result = await this.courseRepository.update({ ...dto }, { where: { id }, returning: true });
    return result[1][0];
  }
  remove(id: string): void {
    this.courseRepository.destroy({ where: { id } });
  }

}
