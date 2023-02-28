import { Injectable } from '@nestjs/common';
import { CourseRepository } from './course.repository';
import { CourseDto } from './dto/course.dto';

@Injectable()
export class CourseService {
  constructor (private readonly courseRepository: CourseRepository){}
  create(courseDto: CourseDto) {
    return this.courseRepository.create(courseDto);
  }

  findAll() {
    return this.courseRepository.findAll();
  }

  findOne(id: string) {
    return this.courseRepository.findOne(id);
  }

  update(id: string, courseDto: CourseDto) {
    return this.courseRepository.update(id, courseDto);
  }

  remove(id: string) {
    return this.courseRepository.remove(id);
  }
}
