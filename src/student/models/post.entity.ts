import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { StudSubjectEntity } from './subject.entity';

@Entity('student_ post')
export class StudentPostEntity {
  @PrimaryGeneratedColumn() student_id: number;

  @Column() full_name: string;

  @Column() email: string;

  @Column() contact: number;

  @Column() address: string;
  // @OneToMany((type) => StudSubjectEntity, (sub) => sub.sub_name)
  // sub_names: StudSubjectEntity[];
  // @Column() student_profile: string;

  @ManyToMany(
    () => StudSubjectEntity,
    (subject: StudSubjectEntity) => subject.student,
  )
  // @JoinTable({ name: 'Reference_of_student_subject_table' })
  @JoinTable({
    name: 'Ref_stud_sub_table', // table name for the junction table of this relation
    // @Column()
    // id:number,
    joinColumn: {
      name: 'student',
      referencedColumnName: 'student_id',
      foreignKeyConstraintName: 'student',
    },
    inverseJoinColumn: {
      name: 'subject',
      referencedColumnName: 'subject_id',
      foreignKeyConstraintName: 'subject',
    },
  })
  subject: StudSubjectEntity[];
}
