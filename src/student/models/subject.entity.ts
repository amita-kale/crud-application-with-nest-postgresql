import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { StudentPostEntity } from './post.entity';

@Entity('subject_table')
export class StudSubjectEntity {
  @PrimaryGeneratedColumn() subject_id: number;

  @Column() sub_name: string;
  // @ManyToOne((type) => StudentPostEntity, (stud) => stud.sub_names)
  // stud: StudentPostEntity;
  @ManyToMany(
    () => StudentPostEntity,
    (student: StudentPostEntity) => student.subject,
  )
  student: StudentPostEntity[];
  // @ManyToMany(
  //   () => StudentPostEntity,
  //   (stud: StudentPostEntity) => stud.sub_names,
  // )
  // studs: StudentPostEntity[];
}
