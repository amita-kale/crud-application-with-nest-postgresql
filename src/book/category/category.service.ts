import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { BookEntity } from '../models/book.entity';
import { BookCategoryEntity } from './category.entity';
import { CategoryModel } from './category.model';
import { PatchCategory } from './category.patch';
// import { Category } from './cateogory.interface';


// import { BookModel } from './models/book.model';

@Injectable()
export class CategoryService {
    constructor (
        @InjectRepository(BookCategoryEntity)
        private readonly bookCategoryRepository: Repository<BookCategoryEntity>
    ) {}
 
       
    addCategory(categoryModel: CategoryModel): Observable<BookCategoryEntity> {
      return from(this.bookCategoryRepository.save(categoryModel));
    }
  
  

    

}