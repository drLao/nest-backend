import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { Role } from './roles.model';

import { RolesService } from './roles.service';

import { CreateRoleDto } from './dto/create-role.dto';

@ApiTags('API methods for roles')
@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @ApiOperation({ summary: 'Create Role in DB' })
  @ApiResponse({ status: 200, type: Role })
  @Post()
  createRoleWithService(@Body() roleDto: CreateRoleDto) {
    return this.rolesService.createRole(roleDto);
  }

  @ApiOperation({ summary: 'Get all Roles from DB' })
  @ApiResponse({ status: 200, type: [Role] })
  @Get()
  getAllRolesWithService() {
    return this.rolesService.getAllRoles();
  }

  @ApiOperation({ summary: 'Get Role from DB by value' })
  @ApiResponse({ status: 200, type: [Role] })
  @Get('/:value')
  getRolesByIdWithService(@Param('value') value: string) {
    return this.rolesService.getRoleByValue(value);
  }
}
