import { BaseDto } from '../entities/base-dto';
import { BaseEntity } from '../entities/base-entity';

export interface BaseRepository<Dto extends BaseDto, G extends BaseEntity> {
  create(dto: Dto): Promise<G>;
  findAll(): Promise<G[]>;
  findOne(id: string): Promise<G>;
  update(id: string, dto: Dto): Promise<G>;
  remove(id: string): void;
}
