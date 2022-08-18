import { Controller, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedController } from '../controllers/employee.controller';
import { FeedPostEntity } from '../models/post.entity';
import { FeedService } from './employee.service';

@Module({
  imports:[TypeOrmModule.forFeature([FeedPostEntity])],
  providers: [FeedService],
  controllers: [FeedController],
})
export class FeedModule {}
 