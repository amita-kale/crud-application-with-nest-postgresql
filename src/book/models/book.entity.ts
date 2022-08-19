import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// import { IsNotEmpty, IsString, IsInt} from "class-validator";
// import { Factory } from 'nestjs-seeder';
// import {IsNotEmpty} from "@nestjs/common";

@Entity('book_details')
export class BookEntity {
  @PrimaryGeneratedColumn()
  // @IsInt()
  book_id: number;

  @Column({ default: '' })
  // @IsNotEmpty()
  // @IsString()
  book_name: string;

  @Column()
  // @IsNotEmpty()
  // @isNaN()
  author: string;

  @Column()
  // @IsNotEmpty()
  // @IsInt()
  price: number;

  @Column()
  // @IsNotEmpty()
  // @IsString()
  // // @Factory(faker => faker.image.imageUrl())
  book_image: string;

  @Column()
  // @IsNotEmpty()
  // @IsString()
  book_isbn: string;
}
