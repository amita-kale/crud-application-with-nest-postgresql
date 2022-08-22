import {MigrationInterface, QueryRunner} from "typeorm";

export class AddDatabase implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("Create database user-info");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `company` DROP COLUMN `city`");
    }

}