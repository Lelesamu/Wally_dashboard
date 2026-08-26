import { Column, Entity } from "typeorm";

// Tab DB: wd_nav
@Entity('wd_nav')
export class Nav {
    @Column()
    name: string;

    @Column()
    route: string;

    @Column()
    type: string
    
}