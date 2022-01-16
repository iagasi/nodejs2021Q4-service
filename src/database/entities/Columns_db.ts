import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, BaseEntity, ManyToOne, PrimaryColumn } from "typeorm";
import { Board_db } from "./Board_db";
//import { User } from "./User_db";

@Entity()
export class Columns_db extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: string;
 
    @Column()
    title:string
    @Column()
    order:number
   @ManyToOne(()=>Board_db,board=>board.columns)
   board:Board_db;
}
//