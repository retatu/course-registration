import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { CourseRepository } from './course.repository';
import { courseProviders } from './course.providers';

@Module({
  controllers: [CourseController],
  providers: [CourseService, CourseRepository, ...courseProviders]
})
export class CourseModule {}
