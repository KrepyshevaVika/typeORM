import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class node_type {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    name: string;

    @Column()
    is_endpoint: boolean;

    constructor(name: string, is_endpoint: boolean){
        this.name = name;
        this.is_endpoint = is_endpoint;
    }

}