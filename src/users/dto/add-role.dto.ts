import { ApiProperty } from '@nestjs/swagger';

export class AddRoleDto {
  @ApiProperty({
    example: '1',
    description: 'ID of User which should receive granted role',
  })
  readonly userId: number;

  @ApiProperty({
    example: 'ADMIN',
    description: 'Text value of role which should be granted',
  })
  readonly value: string;
}
