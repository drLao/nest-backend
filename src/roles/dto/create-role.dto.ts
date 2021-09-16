import { ApiProperty } from '@nestjs/swagger';

import { IsString } from 'class-validator';

export class CreateRoleDto {
  @IsString({
    message: 'Role literal should be a string and must be presented, !nullable',
  })
  @ApiProperty({
    example: 'USER',
    description: 'String literal for role value',
  })
  readonly value: string;

  @IsString({
    message:
      'Role description should be a string and must be presented, !nullable',
  })
  @ApiProperty({
    example: 'Description of role',
    description: 'Description of role',
  })
  readonly description: string;
}
