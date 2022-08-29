import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Reference_of_student_subject_table')
export class StudSubjectEntity {
  @PrimaryGeneratedColumn() id: number;
  //   @Column() student_id: number;
  //   @Column() subject_id: number;
  // @ManyToOne((type) => StudentPostEntity, (stud) => stud.sub_names)
  // stud: StudentPostEntity;
}
