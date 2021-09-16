import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/sequelize';

import { UserPost } from './posts.model';

import { FilesService } from '../files/files.service';

import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(UserPost) private userPostRepository: typeof UserPost,
    private fileService: FilesService,
  ) {}

  async createPost(dto: CreatePostDto, image: any): Promise<UserPost> {
    const fileName = await this.fileService.createFile(image);
    const newPost = await this.userPostRepository.create({
      ...dto,
      image: fileName,
    });
    return newPost;
  }
}
