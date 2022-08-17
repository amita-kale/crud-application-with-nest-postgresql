import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

import { IsNotEmpty, IsString, IsInt} from "class-validator";
// import {IsNotEmpty} from "@nestjs/common";

@Entity('book_detail')
export class BookEntity {
    @PrimaryGeneratedColumn()
    @IsInt()
    book_id: number;

    @Column({default: ''})
    @IsNotEmpty()
    @IsString()
    book_name: string;

    @Column()
    @IsNotEmpty()
    author: string;

    @Column()
    @IsNotEmpty()
    @IsInt()
    price: number;

    // @Column()
    // @IsNotEmpty()
    // @IsString()
    // book_image: string;

    @Column()
    @IsNotEmpty()
    @IsString()
    book_isbn: string;
}