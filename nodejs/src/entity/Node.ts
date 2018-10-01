import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany} from "typeorm";
import {node_type} from "./NodeType";

@Entity()
export class node {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    name: string;

    @Column("text", { nullable: true })
    ip_adress: string;

    @Column({ nullable: true })
    web_port: number;

    @Column({ default: 0 })
    count_child: number;

    @ManyToOne(type => node_type, node_type => node_type.nodes, { cascade: true, nullable: false })
    @JoinColumn({ name: "type_id" })
    node_type: node_type;

    @ManyToOne(type => node, node => node.child, { cascade: true, onDelete: 'CASCADE' })
    @JoinColumn({ name: "node_id" })
    node_id: node;

    @OneToMany(type => node, node => node.node_id)
    child: node;

    constructor(name: string, ip_adress: string, web_port: number, count_child: number, type_id: node_type, node_id: node){
        this.name = name;
        this.ip_adress = ip_adress;
        this.web_port = web_port;
        this.count_child = count_child;
        this.node_type = type_id;
        this.node_id = node_id;
    }
}