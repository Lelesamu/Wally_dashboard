import { Column, Entity, PrimaryColumn } from "typeorm";

// Tab DB: wd_nav
@Entity('wd_nav')
export class Nav {
    @PrimaryColumn()
    name: string;

    @Column()
    route: string;

    @Column()
    type: string
    
}