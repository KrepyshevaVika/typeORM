import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("user",{schema:"public"})
export class user {

    @PrimaryGeneratedColumn({ 
        name:"id"
        })
    id:number;
        

    @Column("character varying",{ 
        nullable:false,
        name:"firstName"
        })
    firstName:string;
        

    @Column("character varying",{ 
        nullable:false,
        name:"lastName"
        })
    lastName:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"age"
        })
    age:number;
        
}
