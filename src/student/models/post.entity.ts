import {
    Column, Entity, PrimaryGeneratedColumn
}
from "typeorm";

@Entity('student_ post') export class StudentPostEntity {
    @PrimaryGeneratedColumn() student_id: number;

    @Column() full_name: string;


    @Column() email: string;

    @Column() contact: number;

    @Column() address: string;
    @Column() student_profile: string;


}
