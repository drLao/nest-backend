import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({
    example: 'USER',
    description: 'String literal for role value',
  })
  readonly value: string;

  @ApiProperty({
    example: 'Description of role',
    description: 'Description of role',
  })
  readonly description: string;
}
