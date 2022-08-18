import {
    Body, Controller, Delete, Get, Param, Patch, Post, Put
}
from '@nestjs/common';
import {
    Observable
}
from 'rxjs';
import {
    DeleteResult, UpdateResult
}
from 'typeorm';
import {
    ValidateStudentModel
}
from './models/post.model';
import {
    StudentPost
}
from './models/post.interface';
import {
    StudentService
}
from './student.service';


@Controller('student') export class StudentController {
    constructor(private studentService: StudentService) {}

    // @Post() create(@Body() studentPost: StudentPost):Observable<StudentPost > {
    //     return this.studentService.createPost(studentPost);
    // }

    // @Get() findAll():Observable<StudentPost[] > {
    //     return this.studentService.findAllPosts();
    // }

    // updated code

    @Post() create(@Body() validateStudentModel: ValidateStudentModel):Observable<StudentPost > {
        return this.studentService.createPost(validateStudentModel);
    }

    @Get() findAll():Observable<StudentPost[] > {
        return this.studentService.findAllPosts();
    };


    @Get(':id') findSpecific(@Param('id') id:number):Observable<StudentPost > {
        return this.studentService.findSpecificStudent(id);
    }

    @Put(':id') update(@Param('id') id:number, @Body() validateStudentModel: ValidateStudentModel):Observable<UpdateResult > {
        return this.studentService.updatePutPost(id,validateStudentModel)
    }

    @Patch(':id') updatePatch(@Param('id') id:number, @Body() validateStudentModel: ValidateStudentModel):Observable<UpdateResult > {
        return this.studentService.updatePatchPost(id,validateStudentModel)
    }


    @Delete(':id') delete(@Param('id') id : number):Observable<DeleteResult > {
        return this.studentService.deletePost(id);
    }

}
