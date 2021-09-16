import { ApiProperty } from '@nestjs/swagger';

import { IsNumber, IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({
    example: 'Post title',
    description: 'Unique Post title, cannot be null',
  })
  @IsString({
    message:
      'Title of the post should be a string and must be presented, !nullable',
  })
  readonly title: string;

  @ApiProperty({
    example: 'Post Content',
    description: 'Post content, cannot be null',
  })
  @IsString({
    message:
      'Content of the post should be a string and must be presented, !nullable',
  })
  readonly postContent: string;

  @ApiProperty({
    example: '1',
    description: 'ID of User, cannot be null',
  })
  @IsNumber(
    {},
    {
      message:
        'ID of author should be a number and must be presented, !nullable',
    },
  )
  readonly userId: number;
}
