import { Module, forwardRef } from '@nestjs/common';

import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './auth.controller';

import { AuthService } from './auth.service';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [
    forwardRef(() => UsersModule),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || 'SECRET',
      signOptions: {
        expiresIn: '24h',
      },
    }),
  ],
  // eslint-disable-next-line prettier/prettier
  exports: [
    AuthService,
    JwtModule
  ],
})
export class AuthModule {}
