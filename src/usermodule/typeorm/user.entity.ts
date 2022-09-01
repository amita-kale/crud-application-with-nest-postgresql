import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { UsersController } from '../controllers/users.controller';
import { PostEntity } from './post.entity';
export enum Gender{
  Male='Male',
  Female='Female',
  Other='Other'
}
export enum UserRole{
  Author='Author',
  Publisher='Publisher',
  Viewer="Viewer"
}
@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;
  
  @Column({
    name:'Name',
    default:'',
  })
  name:string;
  @Column({
    nullable: false,
    default: '',
  })
  username: string;

  @Column({
    name: 'email_address',
    nullable: false,
    default: '',
  })
  user_email: string;

  @Column({
    nullable: false,
    default: '',
  })
  password: string;

  // @Column({
  //   name:"mob_no",
  //   nullable:false,
  //   default:'',
  // })
  // mob_no: number;


  // @Column({
  //   name:'Image',
  //   default:''

  // })
  // image:string;

//   @Column({
//     type:'enum',
//     enum:UserRole,
//   default:UserRole.Viewer})
// role:UserRole;


@Column({
type:'enum',
enum:Gender,
default:Gender.Female
})
gender:Gender;


@OneToMany( type => PostEntity , post => post.user)
  post: PostEntity[];
   }

