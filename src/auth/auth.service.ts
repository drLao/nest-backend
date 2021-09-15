import {
  Injectable,
  HttpException,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

import { User } from '../users/users.model';

import { UsersService } from '../users/users.service';

import { CreateUserDto } from '../users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(userDto: CreateUserDto) {
    const userForLoginCheck = await this.validateUser(userDto);
    return this.generateToken(userForLoginCheck);
  }

  async registration(userDto: CreateUserDto) {
    const userEmailForCheckUp = await this.userService.getUserByEmail(
      userDto.email,
    );

    if (userEmailForCheckUp) {
      throw new HttpException(
        'User with this email created, email must be unique',
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashPassword = await bcrypt.hash(userDto.password, 5);
    const newUser = await this.userService.createUser({
      ...userDto,
      password: hashPassword,
    });
    return this.generateToken(newUser);
  }

  private async generateToken(user: User) {
    const payload = {
      email: user.email,
      id: user.id,
      roles: user.roles,
    };

    return {
      token: this.jwtService.sign(payload),
    };
  }

  private async validateUser(userDto: CreateUserDto) {
    const user = await this.userService.getUserByEmail(userDto.email);
    const passwordEquals = await bcrypt.compare(
      userDto.password,
      user.password,
    );
    if (user && passwordEquals) {
      return user;
    }
    throw new UnauthorizedException({ message: 'Invalid email or password' });
  }
}
