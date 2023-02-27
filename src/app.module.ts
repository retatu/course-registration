import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CategoryModule } from './models/category/category.module';
import { DatabaseModule } from './providers/mysql/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CategoryModule,
    DatabaseModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
