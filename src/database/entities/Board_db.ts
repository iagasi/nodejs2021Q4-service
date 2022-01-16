import { Entity, Column, PrimaryColumn,  BaseEntity, OneToMany,  } from "typeorm";
import { Columns_db } from "./Columns_db";

//import { User } from "./User_db";

@Entity()
export class Board_db extends BaseEntity {

    @PrimaryColumn()
    id: string;

    @Column()
    title: string;

  
    
    @OneToMany(()=>Columns_db,columns=>columns.id,{ onDelete: 'CASCADE' })
   columns:Columns_db[];

   

 
}