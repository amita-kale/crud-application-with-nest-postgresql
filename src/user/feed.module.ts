/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
// import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedController } from './controllers/feed.controller';

import { FeedPostEntity } from './models/post.entity';
import { FeedService } from './services/feed.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([FeedPostEntity]),
    // MulterModule.register({ dest: './uploads' }),
  ],
  providers: [FeedService],
  controllers: [FeedController],
})
export class FeedModule { }
