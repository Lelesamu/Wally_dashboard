import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

/**
 * Entity TypeORM associata alla tabella `wd_nav`.
 *
 * Unique TypeORM:
 * ogni combinazione di label, menuOrder e menuType deve essere univoca.
 */
@Entity('wd_nav')
@Unique(['label', 'menuOrder', 'menuType'])
export class Nav {
    @PrimaryGeneratedColumn({ name: 'id' })
    id: number;

    @Column({ name: 'label', type: 'varchar', length: 255, nullable: false })
    label: string;

    @Column({ name: 'menu_order', type: 'varchar', length: 10, nullable: false })
    menuOrder: string;

    @Column({ name: 'menu_type', type: 'varchar', length: 25, nullable: false })
    menuType: string;

    @Column({ name: 'parent_id', type: 'int', nullable: true })
    parentId: number | null;

    @Column({ name: 'route', type: 'varchar', length: 255, nullable: true })
    route: string | null;

    @Column({ name: 'action', type: 'varchar', length: 255, nullable: true })
    action: string | null;

    @Column({ name: 'icon', type: 'varchar', length: 25, nullable: true })
    icon: string | null;

    @Column({ name: 'visible', type: 'boolean', nullable: true })
    visible: boolean | null;
    
    @Column({ name: 'translate_key', type: 'varchar', length: 255, nullable: false })
    translateKey: string;
}