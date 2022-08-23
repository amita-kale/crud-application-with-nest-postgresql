import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ValidateStudentModel } from './models/post.model';
import { StudentPost } from './models/post.interface';
import { StudentService } from './student.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('student')
export class StudentController {
  imagepath: string;
  constructor(private studentService: StudentService) {}

  @Post() create(
    @Body() validateStudentModel: ValidateStudentModel,
  ): Observable<StudentPost> {
    validateStudentModel.student_profile = this.imagepath;
    return this.studentService.createPost(validateStudentModel);
  }

  @Post('image')
  @UseInterceptors(
    FileInterceptor('student_profile', {
      storage: diskStorage({
        destination: './images',
        filename: (req, image, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(image.originalname);
          // const filename = `${image.originalname}-${uniqueSuffix}${ext}`;
          const filename = `${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
    }),
  )
  handleupload(@UploadedFile() image: Express.Multer.File) {
    this.imagepath = image.path;
    console.log('image', image);
    console.log('path', image.path);
    return 'file upload API';
  }
  @Get('showimage/:image')
  seeUploadedFile(@Param('image') image, @Res() res) {
    return res.sendFile(image, { root: './images' });
  }

  @Get() findAll(): Observable<StudentPost[]> {
    return this.studentService.findAllPosts();
  }

  @Get(':id') findSpecific(@Param('id') id: number): Observable<StudentPost> {
    return this.studentService.findSpecificStudent(id);
  }

  @Put(':id') update(
    @Param('id') id: number,
    @Body() validateStudentModel: ValidateStudentModel,
  ): Observable<UpdateResult> {
    return this.studentService.updatePutPost(id, validateStudentModel);
  }

  @Patch(':id') updatePatch(
    @Param('id') id: number,
    @Body() validateStudentModel: ValidateStudentModel,
  ): Observable<UpdateResult> {
    return this.studentService.updatePatchPost(id, validateStudentModel);
  }

  @Delete(':id') delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.studentService.deletePost(id);
  }
}
