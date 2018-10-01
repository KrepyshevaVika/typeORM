import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {node_type} from "./node_type";


@Entity("node",{schema:"public"})
export class node {

    @PrimaryGeneratedColumn({ 
        name:"id"
        })
    id:number;
        

    @Column("text",{ 
        nullable:false,
        name:"name"
        })
    name:string;
        

    @Column("text",{ 
        nullable:true,
        name:"ip_adress"
        })
    ip_adress:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"web_port"
        })
    web_port:number | null;
        

    @Column("integer",{ 
        nullable:false,
        default:"0",
        name:"count_child"
        })
    count_child:number;
        

   
    @ManyToOne(type=>node_type, node_type=>node_type.nodes,{  nullable:false, })
    @JoinColumn({ name:'type_id'})
    type_:node_type | null;


   
    @ManyToOne(type=>node, node=>node.nodes,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'node_id'})
    node_:node | null;


   
    @OneToMany(type=>node, node=>node.node_,{ onDelete: 'CASCADE' , })
    nodes:node[];
    
}
