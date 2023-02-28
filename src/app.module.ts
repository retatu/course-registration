import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CategoryModule } from './models/category/category.module';
import { DatabaseModule } from './providers/mysql/database.module';
import { CourseModule } from './models/course/course.module';
import { AuthorModule } from './models/author/author.module';
import { VideoModule } from './models/class/video/video.module';
import { TopicModule } from './models/topic/topic.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CategoryModule,
    DatabaseModule,
    AuthorModule,
    VideoModule,
    TopicModule,
    CourseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
