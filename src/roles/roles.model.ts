import {
  Model,
  Table,
  Column,
  BelongsToMany,
  DataType,
} from 'sequelize-typescript';

import { ApiProperty } from '@nestjs/swagger';

import { User } from '../users/users.model';

import { UserRoles } from '../shared-models/user-roles.model';

interface RoleCreationAttributes {
  value: string;
  description: string;
}

@Table({
  tableName: 'roles',
})
export class Role extends Model<Role, RoleCreationAttributes> {
  @ApiProperty({
    example: '1',
    description: 'Unique id of role, autoincrement, primary',
  })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'ADMIN',
    description: 'Unique role value, can be multiply for one user, !nullable',
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  value: string;

  @ApiProperty({
    example: 'Administrator has full rights in this project',
    description: 'Description of role',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}
