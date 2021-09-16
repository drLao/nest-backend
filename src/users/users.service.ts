import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/sequelize';

import { User } from './users.model';
import { Role } from '../roles/roles.model';

import { RolesService } from '../roles/roles.service';

import { CreateUserDto } from './dto/create-user.dto';
import { BanUserDto } from './dto/ban-user.dto';
import { AddRoleDto } from '../roles/dto/add-role.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userRepository: typeof User,
    private rolesService: RolesService,
  ) {}

  async createUser(dto: CreateUserDto) {
    const createdUser = await this.userRepository.create(dto);
    const newUserRole = await this.rolesService.getRoleByValue('USER');
    await createdUser.$set('roles', [newUserRole.id]);
    createdUser.roles = [newUserRole];
    return createdUser;
  }

  async getAllUsers() {
    const allUsers = await this.userRepository.findAll({
      include: [Role],
    });
    return allUsers;
  }

  async getUserByEmail(email: string) {
    const userByEmail = await this.userRepository.findOne({
      where: { email },
      include: [Role],
    });
    return userByEmail;
  }

  async addRoleToUser(roleDto: AddRoleDto) {
    const user = await this.userRepository.findByPk(roleDto.userId);
    const role = await this.rolesService.getRoleByValue(roleDto.value);

    if (role && user) {
      await user.$add('role', role.id);
      return roleDto;
    }

    throw new HttpException(
      'User or Role cannot be found',
      HttpStatus.NOT_FOUND,
    );
  }

  async banUser(banDto: BanUserDto) {
    const user = await this.userRepository.findByPk(banDto.userId);

    if (user) {
      user.banned = true;
      user.banReason = banDto.banReason;
      await user.save();
      return user;
    }

    throw new HttpException('User cannot be found', HttpStatus.NOT_FOUND);
  }
}
