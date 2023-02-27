import { Column, Table } from 'sequelize-typescript';
import { BaseEntity } from 'src/common/entities/base-entity';

@Table({ tableName: 'categories' })
export class Category extends BaseEntity {
  @Column
  private _name: string;
  @Column
  private _description: string;

  get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }

  get description(): string {
    return this._description;
  }
  set description(description: string) {
    this._description = description;
  }
}
