import { Column,  Entity, JoinColumn, ManyToMany, ManyToOne,  PrimaryGeneratedColumn } from "typeorm";

import { IsNotEmpty, IsString, IsInt} from "class-validator";
import { BookEntitys } from "../models/book.entity";


@Entity('bookcategory1')
export class BookCategoryEntity {
    @PrimaryGeneratedColumn()
    @IsInt()
    categoryId: number;

    @Column({default: ''})
    @IsNotEmpty()
    @IsString()
    categoryName: string;

    
    @ManyToMany(()=> BookEntitys, 
    (book:BookEntitys)=>book.category)
    book:BookEntitys[];
   

}
