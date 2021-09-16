import { Module } from '@nestjs/common';

import { SequelizeModule } from '@nestjs/sequelize';

import { UserRoles } from './user-roles.model';

import { User } from '../users/users.model';
import { Role } from '../roles/roles.model';

@Module({
  imports: [SequelizeModule.forFeature([UserRoles, User, Role])],
  exports: [SharedModelsModule],
})
export class SharedModelsModule {}
