import { Body, Controller, Param, UseGuards, Get, Post } from '@nestjs/common';

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { Roles } from '../auth/roles-auth.decorator';

import { RolesGuard } from '../auth/guard-control/roles.guard';

import { User } from './users.model';

import { UsersService } from './users.service';

import { CreateUserDto } from './dto/create-user.dto';
import { AddRoleDto } from '../roles/dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';

@ApiTags('API methods for users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'Create User in DB' })
  @ApiResponse({ status: 200, type: User })
  @Post()
  createUserWithService(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @ApiOperation({ summary: 'Give selected User specific role' })
  @ApiResponse({ status: 200 })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post('/role')
  addRoleToUserWithService(@Body() roleDto: AddRoleDto) {
    return this.usersService.addRoleToUser(roleDto);
  }

  @ApiOperation({ summary: 'Ban selected User' })
  @ApiResponse({ status: 200 })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post('/ban')
  banUserWithService(@Body() banDto: BanUserDto) {
    return this.usersService.banUser(banDto);
  }

  @ApiOperation({ summary: 'Get all Users from DB' })
  @ApiResponse({ status: 200, type: [User] })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get()
  getAllUsersWithService() {
    return this.usersService.getAllUsers();
  }

  @ApiOperation({ summary: 'Get User from DB by email' })
  @ApiResponse({ status: 200, type: [User] })
  @Get('/:email')
  getRolesByIdWithService(@Param('email') email: string) {
    return this.usersService.getUserByEmail(email);
  }
}
