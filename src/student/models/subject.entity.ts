import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('subject_table')
export class StudSubjectEntity {
  @PrimaryGeneratedColumn() subject_id: number;

  @Column() sub_name: string;
}
