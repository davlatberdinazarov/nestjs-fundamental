import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog-dto';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @HttpCode(200)
  @Get()
  async getAllBlog() {
    return this.blogService.findAll();
  }

  @HttpCode(201)
  @Post()
  async createBlog(@Body() createBlogDto: CreateBlogDto) {
    return this.blogService.create(createBlogDto);
  }

  @HttpCode(200)
  @Get(':id')
  getBlogById(@Param('id') id: string) {
    return this.blogService.findById(id);
  }

  @HttpCode(200)
  @Put(':id')
  updateBlog(@Param('id') id: string, @Body() updateBlogDto: CreateBlogDto) {
    return this.blogService.update(id, updateBlogDto);
  }

  @HttpCode(200)
  @Delete(':id')
  deleteBlog(@Param('id') id: string) {
    return this.blogService.delete(id);
  }
}
