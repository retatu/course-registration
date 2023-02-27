import { BaseEntity } from '../entities/base-entity';

export interface BaseRepository<G extends BaseEntity> {
  create(entity: G): G;
  findAll(): G[];
  findOne(id: string): G;
  update(id:string, entity: G): G;
  remove(id: string): void;
}