import { ConfigService } from '@nestjs/config';
import { Sequelize } from 'sequelize-typescript';
import { Author } from 'src/models/author/entities/author.entity';
import { Category } from 'src/models/category/entities/category.entity';
import { Video } from 'src/models/class/video/entities/video.entity';
import { Course } from 'src/models/course/entities/course.entity';
import { Topic } from 'src/models/topic/entities/topic.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_POST'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASS'),
        database: configService.get('DB_NAME'),

      });
      sequelize.addModels([Category, Author, Course, Topic, Video]);
      await sequelize.sync({
        alter: true
        // force: true
      });
      return sequelize;
    },
  },
];
