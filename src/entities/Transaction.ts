import { BaseEntity,Column,Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import{User} from "./Client"
@Entity()
export class Transaction extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    type:string

    @Column()
    amount:number

   @ManyToOne(()=>User,
   user=>user.transactions)
   @JoinColumn({
       name:"user_id"
   })
   user:User
}