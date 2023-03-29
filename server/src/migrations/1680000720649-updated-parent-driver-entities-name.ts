import { MigrationInterface, QueryRunner } from "typeorm";

export class updatedParentDriverEntitiesName1680000720649 implements MigrationInterface {
    name = 'updatedParentDriverEntitiesName1680000720649'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "parent" DROP COLUMN "firstName"
        `);
        await queryRunner.query(`
            ALTER TABLE "parent" DROP COLUMN "lastName"
        `);
        await queryRunner.query(`
            ALTER TABLE "driver" DROP COLUMN "firstName"
        `);
        await queryRunner.query(`
            ALTER TABLE "driver" DROP COLUMN "lastName"
        `);
        await queryRunner.query(`
            ALTER TABLE "parent"
            ADD "name" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "driver"
            ADD "name" character varying NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "driver" DROP COLUMN "name"
        `);
        await queryRunner.query(`
            ALTER TABLE "parent" DROP COLUMN "name"
        `);
        await queryRunner.query(`
            ALTER TABLE "driver"
            ADD "lastName" character varying
        `);
        await queryRunner.query(`
            ALTER TABLE "driver"
            ADD "firstName" character varying
        `);
        await queryRunner.query(`
            ALTER TABLE "parent"
            ADD "lastName" character varying
        `);
        await queryRunner.query(`
            ALTER TABLE "parent"
            ADD "firstName" character varying
        `);
    }

}
