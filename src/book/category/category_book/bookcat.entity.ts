import { Column,  Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";

import { IsNotEmpty, IsString, IsInt} from "class-validator";
import { ForeignKeyMetadata } from "typeorm/metadata/ForeignKeyMetadata";
import { BookCategoryEntity } from "../category.entity";
import { BookEntity } from "src/book/models/book.entity";



@Entity('bookcategory123')
export class BookCatEntity {
    @PrimaryGeneratedColumn()
    // @PrimaryColumn()
    @IsInt()
    id: number;

    @Column()
    // @JoinColumn()
    // @ManyToMany(()=> BookCategoryEntity, (category:BookCategoryEntity)=>category.book)
    
    // @IsNotEmpty()
    // @IsInt()
    book:number;

    @Column()
    // @JoinColumn()
    // @ManyToMany(()=>BookEntity, 
    // (book:BookEntity)=>book.category)
    
    // @IsNotEmpty()
    // @IsInt()
    category:number
 
}