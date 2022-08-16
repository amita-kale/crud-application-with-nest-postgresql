import {
    Column, Entity, PrimaryGeneratedColumn
}
from "typeorm";

@Entity('student_ post') export class StudentPostEntity {
    @PrimaryGeneratedColumn() id: number;

    @Column() full_name: string;


    @Column() email: string;

    @Column() contact: number;

    @Column() address: string;
}
