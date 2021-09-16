import { Module } from '@nestjs/common';

import { SequelizeModule } from '@nestjs/sequelize';

import { FilesModule } from '../files/files.module';

import { User } from '../users/users.model';
import { UserPost } from './posts.model';

import { PostsController } from './posts.controller';

import { PostsService } from './posts.service';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [SequelizeModule.forFeature([User, UserPost]), FilesModule],
})
export class PostsModule {}
