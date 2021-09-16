import {
  Model,
  Table,
  Column,
  BelongsTo,
  ForeignKey,
  DataType,
} from 'sequelize-typescript';

import { ApiProperty } from '@nestjs/swagger';

import { User } from '../users/users.model';

interface UserPostCreationAttributes {
  title: string;
  postContent: string;
  userId: number;
  image: string;
}

@Table({
  tableName: 'posts',
})
export class UserPost extends Model<UserPost, UserPostCreationAttributes> {
  @ApiProperty({
    example: '1',
    description: 'Unique id of Post, autoincrement, primary',
  })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Post title',
    description: 'Post title that should be displayed, !nullable',
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  title: string;

  @ApiProperty({
    example: 'Post content',
    description: 'Post content for displaying, !nullable',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  postContent: string;

  @ApiProperty({
    example: 'Post image',
    description: 'Post image for displaying, nullable',
  })
  @Column({
    type: DataType.STRING,
  })
  image: string;

  @ApiProperty({
    example: '1',
    description: 'ID Author of the post',
  })
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;

  @ApiProperty({
    example: 'User',
    description: 'Author of the post',
  })
  @BelongsTo(() => User)
  author: User;
}
