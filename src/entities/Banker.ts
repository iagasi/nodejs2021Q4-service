import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import { User } from "./Client";

@Entity()
export class Banker extends User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column({
        unique: true
    })
    employenumber: number;

    @ManyToMany(
        () => User,

    )
    @JoinTable({
        name: "banker_and_client",
        joinColumn: {
            name: "banker",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "user",
            referencedColumnName: "id"
        }

    })
    clients: User[]
}