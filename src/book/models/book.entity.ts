import { Column,  Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { ForeignKeyMetadata } from "typeorm/metadata/ForeignKeyMetadata";

import { IsNotEmpty, IsString, IsInt} from "class-validator";
import { BookCategoryEntity } from "../category/category.entity";

@Entity('book_details')
export class BookEntitys {
    @PrimaryGeneratedColumn()
    @IsInt()
    book_id: number;

    @Column({default: ''})
    @IsNotEmpty()
    @IsString()
    book_name: string;
      
    @ManyToMany(()=> BookCategoryEntity, (category:BookCategoryEntity)=>category.book)
  
    @JoinTable({
        name: "bookcategory123", // table name for the junction table of this relation
        joinColumn: {
            name: "book",
            referencedColumnName: "book_id",
            foreignKeyConstraintName:"book"
        },
        inverseJoinColumn: {
            name: "category",
            referencedColumnName: "categoryId",
            foreignKeyConstraintName:"category"
        }
    
     
    })

    category:BookCategoryEntity[];
  

 

    @Column()
    @IsNotEmpty()
    author: string ;

    @Column()
    @IsNotEmpty()
    @IsInt()
    price: number;

    // @Column()
    // @IsNotEmpty()
    // @IsString()
    // // // @Factory(faker => faker.image.imageUrl())
    // book_image: string;

    @Column()
    @IsNotEmpty()
    @IsString()
    book_isbn: string;
 
}