import { User } from "./user.entity";
import { PostEntity } from "./post.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { GenrePost } from "./genrepost.entity";

@Entity()
export class GenreEntity{
    @PrimaryGeneratedColumn({
        type:'bigint',
        name:'id'
    })
    id:number;

    @Column({
        default:''
    })
    name:string;
    
    @OneToMany((type)=>GenrePost,genrePosts=>genrePosts.genre,{
        cascade:true})
    genrePosts:GenrePost[];
}