import {
    Body,
    Controller,
    Delete,
    Get,
    Post,
    Param
   

  } from '@nestjs/common';
 

  import { Observable } from 'rxjs';
  // import { DeleteResult, UpdateResult } from 'typeorm';
  import { CategoryModel } from './category.model';
  // import { PatchCategory } from './category.patch';
import { CategoryService } from './category.service';
import { Category } from './category.interface';


  
  @Controller('category')
  export class CategoryController {
    constructor(private CategoryService: CategoryService) {}
    
  
  
    // @Get()
    // findAllCategory(): Observable<Category[]> {
    //   console.log("table");
      
    //   return this.categoryService.findAllCategory();
    // }


    @Post()
   
    add(@Body() categoryModel: CategoryModel): Observable<Category> {
      console.log(categoryModel);
      return this.CategoryService.addCategory(categoryModel);
     
    }

    

  
   
  }