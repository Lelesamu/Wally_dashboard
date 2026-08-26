import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// Nome della tabella nel database: wd_users
@Entity('wd_users')
export class User {
    @PrimaryGeneratedColumn({ name: 'id' })
    id: number;

    @Column({ name: 'username' })
    username: string;

    @Column({ name: 'pwd' })
    @Exclude()
    password: string;
}