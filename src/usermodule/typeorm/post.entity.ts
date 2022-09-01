import { Column, Entity, OneToOne,ManyToOne,ManyToMany,PrimaryGeneratedColumn, JoinTable, JoinColumn, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { GenreEntity } from './genre.entity';
import { GenrePost } from './genrepost.entity';
@Entity()
export class PostEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;
  
  @Column({
    name:'Post_title',
    default:'',
  })
  post_title:string;

  @Column({
    name:'Post_Content',
    default:'',
  })
  post_content:string;

  // @Column({
  //   nullable:true
  // })
  // category?:string;



  @ManyToOne(type => User, user => user.post,{
    eager:true
  })
  @JoinColumn({name:"id"})
  user: User;

  @OneToMany(type => GenrePost,genrePosts=>genrePosts.post,{
    cascade:true
  })
    genrePosts: GenrePost[];
}