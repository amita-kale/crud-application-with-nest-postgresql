import { Column,  Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { IsNotEmpty, IsString, IsInt} from "class-validator";
import { BookEntity } from "../models/book.entity";
// import { Factory } from 'nestjs-seeder';
// import {IsNotEmpty} from "@nestjs/common";

@Entity('bookcategory1')
export class BookCategoryEntity {
    @PrimaryGeneratedColumn()
    @IsInt()
    categoryId: number;

    @Column({default: ''})
    @IsNotEmpty()
    @IsString()
    categoryName: string;

    // @ManyToOne(()=> BookEntity, (book:BookEntity)=>book.category)
    // book:BookEntity;

    // recent
    // @ManyToOne(()=> BookCategoryEntity, (category:BookCategoryEntity)=>category.book)
    // category:BookCategoryEntity;
    // book: any;

    // book one-M
    @ManyToMany(()=> BookEntity, 
    (book:BookEntity)=>book.category)
    book:BookEntity[];
    // @JoinColumn({name:'category_id'})

    // @ManyToOne(()=> BookEntity, 
    // (book:BookEntity)=>book.category, 
    // {onUpdate:'CASCADE',onDelete:'CASCADE'})
    // book:BookEntity;

}
