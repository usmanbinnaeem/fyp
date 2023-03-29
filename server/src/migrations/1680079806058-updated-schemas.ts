import { MigrationInterface, QueryRunner } from "typeorm";

export class updatedSchemas1680079806058 implements MigrationInterface {
    name = 'updatedSchemas1680079806058'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD "verified" boolean
        `);
        await queryRunner.query(`
            ALTER TABLE "driver"
            ADD "cnic" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "driver"
            ALTER COLUMN "licenseNo"
            SET NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "driver"
            ALTER COLUMN "licenseNo" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "driver" DROP COLUMN "cnic"
        `);
        await queryRunner.query(`
            ALTER TABLE "user" DROP COLUMN "verified"
        `);
    }

}
