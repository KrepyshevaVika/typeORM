import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class node {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    name: string;

    @Column("text")
    ip_adress: string;

    @Column()
    web_port: number;

    @Column()
    count_child: number;

}