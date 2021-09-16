import { ApiProperty } from '@nestjs/swagger';

import { IsNumber, IsString } from 'class-validator';

export class BanUserDto {
  @IsNumber(
    {},
    {
      message: 'Id of user should be numeric and must be presented, !nullable',
    },
  )
  @ApiProperty({
    example: '1',
    description: 'ID of User which should gracefully receive banhammer',
  })
  readonly userId: number;

  @IsString({
    message: 'Ban description should be in a form of a string, nullable',
  })
  @ApiProperty({
    example: 'Thou pitiful bastard whom should be banned by my sturdy arm',
    description:
      'Reason why this maggot should be banned, maybe empty, we do not care',
  })
  readonly banReason: string;
}
