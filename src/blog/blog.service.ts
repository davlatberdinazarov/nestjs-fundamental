import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog-dto';
import { InjectModel } from '@nestjs/mongoose';
import { Blog } from './schemas/blog.schema';
import { Model } from 'mongoose';

@Injectable()
export class BlogService {
  constructor(@InjectModel(Blog.name) private blogModel: Model<Blog>) {}


  async findAll(): Promise<Blog[]> {
    return await this.blogModel.find().exec();
  }

  async create(createBlogDto: CreateBlogDto): Promise<Blog> {
    const createdBlog = new this.blogModel(createBlogDto);
    return await createdBlog.save();
  }

  async findById(id: string): Promise<Blog> {
    return await this.blogModel.findById(id).exec();
  }


  async update(id: string, updateBlogDto: CreateBlogDto): Promise<Blog> {
    const updatedBlog = await this.blogModel.findByIdAndUpdate(id, updateBlogDto, { new: true }).exec();
    if (!updatedBlog) {
      throw new Error('Blog not found');
    }
    return updatedBlog;
  }
  
  async delete(id: string): Promise<Blog> {
    const blog = await this.blogModel.findByIdAndDelete(id).exec();
    if (!blog) {
      throw new Error('Blog not found');
    }
    return blog;
  }
}
