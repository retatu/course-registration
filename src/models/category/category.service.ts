import { Inject, Injectable } from '@nestjs/common';
import { CategoryRepository } from './category.repository';
import { CategoryDto } from './dto/create-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    private repository: CategoryRepository
  ) {}

  create(categoryDto: CategoryDto) {
    return this.repository.create(categoryDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: string) {
    return this.repository.findOne(id);
  }

  update(id: string, categoryDto: CategoryDto) {
    return this.repository.update(id, categoryDto);
  }

  remove(id: string) {
    return this.repository.remove(id);
  }
}
