import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, OneToMany, ManyToMany, BaseEntity } from "typeorm";


@Entity()
export class User_db extends BaseEntity {

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  login: string;

  @Column()
 password: string

 


}