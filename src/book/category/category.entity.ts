import { Column,  Entity, JoinColumn, ManyToMany, ManyToOne,  PrimaryGeneratedColumn } from "typeorm";

import { IsNotEmpty, IsString, IsInt} from "class-validator";
import { BookEntity } from "../models/book.entity";


@Entity('bookcategory1')
export class BookCategoryEntity {
    @PrimaryGeneratedColumn()
    @IsInt()
    categoryId: number;

    @Column({default: ''})
    @IsNotEmpty()
    @IsString()
    categoryName: string;

    
    @ManyToMany(()=> BookEntity, 
    (book:BookEntity)=>book.category)
    book:BookEntity[];
   

}
