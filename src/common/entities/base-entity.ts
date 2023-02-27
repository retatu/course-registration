import { Column, DataType, Model, PrimaryKey } from 'sequelize-typescript';

export class BaseEntity extends Model {
  @PrimaryKey
  @Column({ field: 'id', type: DataType.UUID, defaultValue: DataType.UUIDV4 })
  id: string;
}