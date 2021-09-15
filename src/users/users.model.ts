import {
  Model,
  Table,
  Column,
  BelongsToMany,
  DataType,
} from 'sequelize-typescript';

import { ApiProperty } from '@nestjs/swagger';

import { Role } from '../roles/roles.model';
import { UserRoles } from '../shared-models/user-roles.model';

interface UserCreationAttributes {
  email: string;
  password: string;
}

@Table({
  tableName: 'users',
})
export class User extends Model<User, UserCreationAttributes> {
  @ApiProperty({
    example: '1',
    description: 'Unique id of user, autoincrement, primary',
  })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'user@email.ru',
    description: 'Unique email of user, cannot be null',
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({
    example: 'passwordOfUser',
    description: 'Password of user, cannot be null',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @ApiProperty({
    example: 'false',
    description: 'Is user banned or not, default value = false',
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  banned: boolean;

  @ApiProperty({
    example: 'Reason of ban',
    description: 'Why user was banned, can be null',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  banReason: string;

  @ApiProperty({
    example: 'ADMIN, USER',
    description: 'Array of user roles',
  })
  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}
