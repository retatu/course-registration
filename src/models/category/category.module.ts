import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { CategoryRepository } from './category.repository';
import { categoryProviders } from './category.providers';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService, CategoryRepository, ...categoryProviders],
})
export class CategoryModule {}
