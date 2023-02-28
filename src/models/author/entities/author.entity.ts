import { Column, Table } from 'sequelize-typescript';
import { BaseEntity } from 'src/common/entities/base-entity';

@Table({ tableName: 'authors' })
export class Author extends BaseEntity {
  @Column
  name: string;
}
