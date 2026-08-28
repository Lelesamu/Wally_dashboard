import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

// TODO: Aggiornare direttamente la tabella su db prima di avviare il backend

/**
 * Entity TypeORM associata alla tabella `wd_users`.
 *
 * Unique TypeORM:
 * ogni username deve essere univoco.
 */
@Entity('wd_users')
@Unique(['username'])
export class User {
    @PrimaryGeneratedColumn({ name: 'id' })
    id: number;

    @Column({ name: 'username', type: 'varchar', length: 50, nullable: false })
    username: string;

    @Column({ name: 'pwd', type: 'varchar', nullable: false })
    @Exclude()
    password: string;
}