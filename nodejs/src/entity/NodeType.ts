import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class node_type {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    name: string;

    @Column()
    is_endpoint: boolean;

}