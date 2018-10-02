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

<<<<<<< HEAD
    @OneToMany(type => node, node => node.node_type) // note: we will create author property in the Photo class below
    nodes: node[];

=======
>>>>>>> 0f484b875a9b4bc899b5139ae325181633f322bd
    constructor(name: string, is_endpoint: boolean){
        this.name = name;
        this.is_endpoint = is_endpoint;
    }
<<<<<<< HEAD
=======

>>>>>>> 0f484b875a9b4bc899b5139ae325181633f322bd
}