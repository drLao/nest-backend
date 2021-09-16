import {
  Model,
  Table,
  Column,
  BelongsToMany,
  HasMany,
  DataType,
} from 'sequelize-typescript';

import { ApiProperty } from '@nestjs/swagger';

import { Role } from '../roles/roles.model';
import { UserPost } from '../posts/posts.model';

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
    description: 'Unique id of User, autoincrement, primary',
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
    description: 'Unique email of User, cannot be null',
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({
    example: 'passwordOfUser',
    description: 'Password of User, cannot be null',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @ApiProperty({
    example: 'false',
    description: 'Is User banned or not, default value = false',
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  banned: boolean;

  @ApiProperty({
    example: 'Reason of ban',
    description: 'Why User was banned, can be null',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  banReason: string;

  @ApiProperty({
    example: 'ADMIN, USER',
    description: 'Array of User Roles',
  })
  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];

  @ApiProperty({
    example: 'Post 1, Post 2',
    description: 'Array of User Posts',
  })
  @HasMany(() => UserPost)
  posts: UserPost[];
}
