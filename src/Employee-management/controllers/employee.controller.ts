import {  Body, Controller, Delete, Get, HttpStatus, Param, ParseUUIDPipe, Post, Put, Query } from '@nestjs/common';
import { Observable, skip } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { FeedPost } from '../models/post.interface';
import { FeedService } from '../services/employee.service';
@Controller('feed')
export class FeedController {
   constructor(private feedService: FeedService){}
     @Post() 
    create(@Body() post:FeedPost):Observable<FeedPost>{
        return this.feedService.createPost(post);
    }

    @Get(':id')
    findPostId(@Param('id', new ParseUUIDPipe({errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE})) id: number):Observable<FeedPost>{
        return this.feedService.findById(id);
    }
    @Get()
    findSelected(@Query('take') take : number=1, @Query('skip') skip: number=1):Observable<FeedPost[]>{
        take = take > 20 ? 20 : take;
        return this.feedService.findPosts(take,skip);
    }
    // @Get()
    // findAll():Observable<FeedPost[]>{
    //     return this.feedService.findAllPosts();
    // }

    @Put(':id')
    update(
        @Param('id', new ParseUUIDPipe({errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE})) id: number,
        @Body() feedPost: FeedPost
    ): Observable<UpdateResult>{
        return this.feedService.updatePost(id, feedPost)
    }

    @Delete(':id')
    delete(@Param('id', new ParseUUIDPipe({errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE})) id:number):Observable<DeleteResult>{
        return this.feedService.deletePost(id);
    }
}
