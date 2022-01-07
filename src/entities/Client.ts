import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, OneToMany, ManyToMany, BaseEntity } from "typeorm";

import { Transaction } from "./Transaction";

@Entity()
export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  last_name: string;

  @Column()
  balance: number

  @OneToMany(() => Transaction,
    transaction => transaction.user)
  transactions: Transaction[]



}