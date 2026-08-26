import { MigrationInterface, QueryRunner } from "typeorm";

export class RenameColumnsWdUsers1787779497454 implements MigrationInterface {
    name = 'RenameColumnsWdUsers1787779497454'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "wd_users" RENAME COLUMN "password" TO "pwd"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "wd_users" RENAME COLUMN "pwd" TO "password"`);
    }

}
