import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Posts } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Posts)
    private readonly postsRepository: Repository<Posts>,
  ) {}
  async create(createPostDto: CreatePostDto, userId: number) {
    const post = {
      title: createPostDto.title,
      content: createPostDto.content,
      user: { id: userId },
    };
    return this.postsRepository.save(post);
  }

  async findAll(userId: number) {
    return await this.postsRepository.findBy({ user: { id: userId } });
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    await this.postsRepository.update(id, updatePostDto);
    return this.postsRepository.findOne({ where: { id } });
  }

  remove(id: number) {
    return this.postsRepository.delete(id);
  }
}
