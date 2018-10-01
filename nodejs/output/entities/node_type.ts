import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {node} from "./node";


@Entity("node_type",{schema:"public"})
export class node_type {

    @PrimaryGeneratedColumn({ 
        name:"id"
        })
    id:number;
        

    @Column("text",{ 
        nullable:false,
        name:"name"
        })
    name:string;
        

    @Column("boolean",{ 
        nullable:false,
        name:"is_endpoint"
        })
    is_endpoint:boolean;
        

   
    @OneToMany(type=>node, node=>node.type_)
    nodes:node[];
    
}
