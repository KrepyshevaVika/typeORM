import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import {node} from "./Node";

@Entity()
export class node_type {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    name: string;

    @Column()
    is_endpoint: boolean;

    @OneToMany(type => node, node => node.node_type) // note: we will create author property in the Photo class below
    nodes: node[];

    constructor(name: string, is_endpoint: boolean){
        this.name = name;
        this.is_endpoint = is_endpoint;
    }
}