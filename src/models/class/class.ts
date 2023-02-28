import { Column } from 'sequelize-typescript';
import { BaseEntity } from 'src/common/entities/base-entity';

export abstract class Class extends BaseEntity {
  @Column
  title: string;
  @Column
  description: string;
}