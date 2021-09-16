import { ApiProperty } from '@nestjs/swagger';

import { IsNumber, IsString } from 'class-validator';

export class AddRoleDto {
  @IsNumber(
    {},
    {
      message: 'Id of user should be numeric and must be presented, !nullable',
    },
  )
  @ApiProperty({
    example: '1',
    description: 'ID of User which should receive granted role',
  })
  readonly userId: number;

  @IsString({
    message: 'Role literal should be a string and must be presented, !nullable',
  })
  @ApiProperty({
    example: 'ADMIN',
    description: 'Text value of role which should be granted',
  })
  readonly value: string;
}
