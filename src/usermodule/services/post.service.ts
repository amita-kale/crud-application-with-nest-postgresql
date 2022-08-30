import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity, User } from '../typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from '../dtos/CreatePost.dtos';


@Injectable()
export class PostService {
    constructor(
        @InjectRepository(PostEntity) private readonly postRepository: Repository<PostEntity>,
      ) {}
      async createPOst(createPostDto: CreatePostDto): Promise<PostEntity> {
        const newPost = this.postRepository.create({
         post_title:createPostDto.post_title,
         post_content:createPostDto.post_content

        });
        return this.postRepository.save(newPost);
      }
      getPosts() {
        return this.postRepository.find();
      }

      findPostById(id: number) {
        return this.postRepository.findOneBy({id})
      }
      delete(id: number){
        this.postRepository.delete(id);
      }

  }