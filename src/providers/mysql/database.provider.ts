import { ConfigService } from '@nestjs/config';
import { Sequelize } from 'sequelize-typescript';
import { Category } from 'src/models/category/entities/category.entity';

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
      sequelize.addModels([Category]);
      await sequelize.sync({
        force: true
      });
      return sequelize;
    },
  },
];
