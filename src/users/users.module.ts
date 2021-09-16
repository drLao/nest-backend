import { Module, forwardRef } from '@nestjs/common';

import { SequelizeModule } from '@nestjs/sequelize';

import { RolesModule } from '../roles/roles.module';
import { AuthModule } from '../auth/auth.module';

import { User } from './users.model';
import { Role } from '../roles/roles.model';
import { UserPost } from '../posts/posts.model';
import { UserRoles } from '../shared-models/user-roles.model';

import { UsersController } from './users.controller';

import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  // eslint-disable-next-line prettier/prettier
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles, UserPost]),
    RolesModule,
    forwardRef(() => AuthModule),
  ],
  exports: [UsersService],
})
export class UsersModule {}
