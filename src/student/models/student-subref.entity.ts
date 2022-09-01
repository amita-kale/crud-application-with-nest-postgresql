import { Column, Entity, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Ref_stud_sub_table')
export class StudSubjectRefEntity {
  @PrimaryGeneratedColumn() id: number;
  @Column() student: number;
  @Column() subject: number;

  // @JoinColumn() student: number;
  // @JoinColumn() subject: number;

  // @ManyToOne((type) => StudentPostEntity, (stud) => stud.sub_names)
  // stud: StudentPostEntity;
}
