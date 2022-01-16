import { BaseEntity,Column,Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Board_db } from "./Board_db";
import { Columns_db } from "./Columns_db";
import { User_db } from "./User_db";
//
@Entity()
export class Tasks_db extends BaseEntity{
    @PrimaryColumn()
    id:string
    @Column()
    title: string
    @Column()
    order:number
    @Column()
    description: string
    @ManyToOne(()=>User_db,User_db=>User_db.id)
    userId: string|null
    @ManyToOne(()=>Board_db,Board_db=>Board_db.id)
    boardId: string|null
  @Column({nullable:true})
     columnId: string
//    @ManyToOne(()=>User,
//    user=>user.transactions)
//    @JoinColumn({
//        name:"user_id"
//    })
//    user:User
}