import {
  Controller,
  Post,
  Body,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { FileInterceptor } from '@nestjs/platform-express';

import { PostsService } from './posts.service';

import { CreatePostDto } from './dto/create-post.dto';

@ApiTags('API methods for posts')
@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @ApiOperation({ summary: 'Create Post in DB' })
  @ApiResponse({ status: 200 })
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  createPostByService(@Body() dto: CreatePostDto, @UploadedFile() image) {
    return this.postsService.createPost(dto, image);
  }
}
