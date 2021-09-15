import { Module } from '@nestjs/common';

import { SequelizeModule } from '@nestjs/sequelize';

import { Role } from './roles.model';
import { User } from '../users/users.model';

import { RolesController } from './roles.controller';

import { RolesService } from './roles.service';

import { UserRoles } from '../shared-models/user-roles.model';

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports: [SequelizeModule.forFeature([Role, User, UserRoles])],
  exports: [RolesService],
})
export class RolesModule {}
