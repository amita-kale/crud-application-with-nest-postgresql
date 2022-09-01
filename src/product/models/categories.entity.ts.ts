import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity("categories")
export class categories{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    productPostId:number;
    
    @Column()
    productCategoryId:number;
}


