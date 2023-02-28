import { Injectable } from '@nestjs/common';
import { AuthorRepository } from './author.repository';
import { AuthorDto } from './dto/author.dto';

@Injectable()
export class AuthorService {
  constructor(private authorRepository: AuthorRepository){}
  create(authorDto: AuthorDto) {
    return this.authorRepository.create(authorDto);
  }

  findAll() {
    return this.authorRepository.findAll();
  }

  findOne(id: string) {
    return this.authorRepository.findOne(id);
  }

  update(id: string, authorDto: AuthorDto) {
    return this.authorRepository.update(id, authorDto);
  }

  remove(id: string) {
    return this.authorRepository.remove(id);
  }
}
