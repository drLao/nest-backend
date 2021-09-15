import { ApiProperty } from '@nestjs/swagger';

export class BanUserDto {
  @ApiProperty({
    example: '1',
    description: 'ID of User which should gracefully receive banhammer',
  })
  readonly userId: number;

  @ApiProperty({
    example: 'Thou pitiful bastard whom should be banned by my sturdy arm',
    description:
      'Reason why this maggot should be banned, maybe empty, we do not care',
  })
  readonly banReason: string;
}
