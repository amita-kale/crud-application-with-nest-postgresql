import { PostEntity } from "./post.entity";
import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { GenreEntity } from "./genre.entity";

@Entity({name: 'genre_post'})
export class GenrePost{
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => PostEntity, post => post.genrePosts)
    @JoinColumn({name: 'post_id'})
    post: PostEntity

    @ManyToOne(() => GenreEntity, genreEntity=> genreEntity.genrePosts)
    @JoinColumn({name: 'category_id'})
    genre: GenreEntity
}