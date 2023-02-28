import { Inject, Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/common/repository/base-repository';
import { AuthorDto } from './dto/author.dto';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorRepository implements BaseRepository<AuthorDto, Author> {
  constructor(
    @Inject('AUTHOR_REPOSITORY')
    private authorRepository: typeof Author
  ) { }
  create(dto: AuthorDto): Promise<Author> {
    return this.authorRepository.create({ ...dto });
  }
  findAll(): Promise<Author[]> {
    return this.authorRepository.findAll();
  }
  findOne(id: string): Promise<Author> {
    return this.authorRepository.findByPk(id);
  }
  async update(id: string, dto: AuthorDto): Promise<Author> {
    const result = await this.authorRepository.update(dto, { where: { id }, returning: true });
    return result[1][0];
  }
  remove(id: string): void {
    this.authorRepository.destroy({ where: { id } });
  }

}