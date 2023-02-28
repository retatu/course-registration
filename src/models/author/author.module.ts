import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';
import { authorProviders } from './author.providers';
import { AuthorRepository } from './author.repository';

@Module({
  controllers: [AuthorController],
  providers: [AuthorService,  AuthorRepository, ...authorProviders]
})
export class AuthorModule {}
