import { Inject, Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/common/repository/base-repository';
import { CategoryDto } from './dto/create-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryRepository implements BaseRepository<CategoryDto, Category>{
  constructor(
    @Inject('CATEGORY_REPOSITORY')
    private categoryRepository: typeof Category
  ) { }

  create(dto: CategoryDto): Promise<Category> {
    return this.categoryRepository.create({ ...dto });
  }
  findAll(): Promise<Category[]> {
    return this.categoryRepository.findAll();
  }
  findOne(id: string): Promise<Category> {
    return this.categoryRepository.findByPk(id);
  }
  async update(id: string, dto: CategoryDto): Promise<Category> {
    const result = await this.categoryRepository.update({ ...dto }, { where: { id }, returning: true });
    return result[1][0];
  }
  remove(id: string): void {
    this.categoryRepository.destroy({ where: { id } });
  }

}
