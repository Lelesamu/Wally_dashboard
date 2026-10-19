import { MigrationInterface, QueryRunner } from "typeorm";

export class TableNav1792443989176 implements MigrationInterface {
    name = 'TableNav1792443989176'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "wd_nav" ("id" SERIAL NOT NULL, "label" character varying(255) NOT NULL, "menu_order" character varying(10) NOT NULL, "menu_type" character varying(25) NOT NULL, "parent_id" integer, "route" character varying(255), "action" character varying(255), "icon" character varying(25), "visible" boolean, "translate_key" character varying(255) NOT NULL, CONSTRAINT "UQ_69548ac6b3b1ee389891eab33e9" UNIQUE ("label", "menu_order", "menu_type"), CONSTRAINT "PK_3294350d8943fe9e06e998aa908" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "wd_users" ALTER COLUMN "username" TYPE character varying(50)`);
        await queryRunner.query(`ALTER TABLE "wd_users" ADD CONSTRAINT "UQ_0c8a1ff6a0d8268ef0601c0964c" UNIQUE ("username")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "wd_users" DROP CONSTRAINT "UQ_0c8a1ff6a0d8268ef0601c0964c"`);
        await queryRunner.query(`ALTER TABLE "wd_users" ALTER COLUMN "username" TYPE character varying`);
        await queryRunner.query(`DROP TABLE "wd_nav"`);
    }

}