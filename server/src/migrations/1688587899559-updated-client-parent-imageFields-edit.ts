import { MigrationInterface, QueryRunner } from "typeorm";

export class updatedClientParentImageFieldsEdit1688587899559 implements MigrationInterface {
    name = 'updatedClientParentImageFieldsEdit1688587899559'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "parent"
            ADD "profileImageUrl" character varying
        `);
        await queryRunner.query(`
            ALTER TABLE "driver"
            ADD "profileImageUrl" character varying
        `);
        await queryRunner.query(`
            ALTER TABLE "driver"
            ADD "licenseImageUrl" character varying
        `);
        await queryRunner.query(`
            ALTER TABLE "vehicle"
            ALTER COLUMN "booked_seats" DROP NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "vehicle"
            ALTER COLUMN "booked_seats"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "driver" DROP COLUMN "licenseImageUrl"
        `);
        await queryRunner.query(`
            ALTER TABLE "driver" DROP COLUMN "profileImageUrl"
        `);
        await queryRunner.query(`
            ALTER TABLE "parent" DROP COLUMN "profileImageUrl"
        `);
    }

}
