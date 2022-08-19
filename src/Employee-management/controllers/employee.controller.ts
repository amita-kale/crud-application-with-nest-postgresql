import {  Body, Controller, Delete, Get, HttpStatus, Param, ParseUUIDPipe, Post, Put, Query } from '@nestjs/common';
import { Observable, skip } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { EmpPost } from '../models/post.interface';
import { EmpService } from '../services/employee.service';
@Controller('emp')
export class EmpController {
   constructor(private empService: EmpService){}
     @Post() 
    create(@Body() post:EmpPost):Observable<EmpPost>{
        return this.empService.createPost(post);
    }

    @Get(':id')
    findPostId(@Param('id', new ParseUUIDPipe({errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE})) id: number):Observable<EmpPost>{
        return this.empService.findById(id);
    }
    @Get()
    findSelected(@Query('take') take : number=1, @Query('skip') skip: number=1):Observable<EmpPost[]>{
        take = take > 20 ? 20 : take;
        return this.empService.findPosts(take,skip);
    }
    
    @Put(':id')
    update(
        @Param('id', new ParseUUIDPipe({errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE})) id: number,
        @Body() empPost: EmpPost
    ): Observable<UpdateResult>{
        return this.empService.updatePost(id, empPost)
    }

    @Delete(':id')
    delete(@Param('id', new ParseUUIDPipe({errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE})) id:number):Observable<DeleteResult>{
        return this.empService.deletePost(id);
    }
}


// for personal ref//
// // @Get()
    // findAll():Observable<EmpPost[]>{
    //     return this.empService.findAllPosts();
    // }
