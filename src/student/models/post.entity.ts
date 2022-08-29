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

  @ManyToMany(() => StudSubjectEntity, (sub) => sub.studs)
  @JoinTable({ name: 'Reference_of_student_subject_table' })
  sub_names: StudSubjectEntity[];
}
