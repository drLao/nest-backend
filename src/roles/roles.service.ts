import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/sequelize';

import { Role } from './roles.model';

import { CreateRoleDto } from './dto/create-role.dto';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private roleRepository: typeof Role) {}

  async createRole(dto: CreateRoleDto) {
    const createdRole = await this.roleRepository.create(dto);
    return createdRole;
  }

  async getRoleByValue(value: string) {
    const roleById = await this.roleRepository.findOne({ where: { value } });
    return roleById;
  }

  async getAllRoles() {
    const allRoles = await this.roleRepository.findAll();
    return allRoles;
  }
}
