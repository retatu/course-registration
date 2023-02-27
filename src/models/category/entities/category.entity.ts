import { Column, Table } from 'sequelize-typescript';
import { BaseEntity } from 'src/common/entities/base-entity';

@Table({ tableName: 'categories' })
export class Category extends BaseEntity {
  @Column({field: 'name'})
  name: string;
  @Column({field: 'decription'})
  description: string;

}
