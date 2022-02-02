import { BaseEntity,Column,Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Board_db } from "../boards/boards.entity";
import { Columns_db } from "../boards/columns.entity";
import { User_db } from "../users/user.entity";
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

    @Column({nullable:true})
    userId: string|null
 @ManyToOne(()=>User_db,User_db=>User_db.id)
 @JoinColumn({name:"userId"})
    USERID: string|null


    @Column({nullable:true})
    boardId: string|null
@ManyToOne(()=>Board_db,Board_db=>Board_db.id)
    @JoinColumn({name:"boardId"})
   BOARDID: string|null
  @Column({nullable:true})
     columnId: string

}


