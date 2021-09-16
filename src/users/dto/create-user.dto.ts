import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'user@email.ru',
    description: 'Unique email of user, cannot be null',
  })
  @IsString({
    message: 'Email should be a string and must be presented, !nullable',
  })
  @IsEmail(
    {},
    { message: 'Incorrect form of Email, should be example@mail.com' },
  )
  readonly email: string;

  @ApiProperty({
    example: 'passwordOfUser',
    description: 'Password of user, cannot be null',
  })
  @IsString({
    message: 'Password should be a string and must be presented, !nullable',
  })
  @Length(6, 20, { message: 'Password should be from 6 to 20 symbols' })
  readonly password: string;
}
