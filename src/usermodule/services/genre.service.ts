import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenreEntity, PostEntity, User } from '../typeorm';
import { In, Repository } from 'typeorm';
import { CreatePostDto } from '../dtos/CreatePost.dtos';
import { CreateGenreDto } from '../dtos/CreateGenre.dtos';


@Injectable()
export class GenreService {
    constructor(
        @InjectRepository(GenreEntity) private readonly genreRepository: Repository<GenreEntity>,
      ) {}
      async createCategory(createGenreDto: CreateGenreDto): Promise<GenreEntity> {
        const newCategory = this.genreRepository.create({
         name:createGenreDto.name

        });
        return this.genreRepository.save(newCategory);
      }
      getCategory() {
        return this.genreRepository.find();
      }

      async getCategoryByIds(ids:Array<number>) {
        return await this.genreRepository.find({ where: { id: In(ids) }});
    }

  }