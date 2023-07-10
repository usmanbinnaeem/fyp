import { MigrationInterface, QueryRunner } from "typeorm";

export class updatedSchoolEntityEdit1688590474954 implements MigrationInterface {
    name = 'updatedSchoolEntityEdit1688590474954'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "school"
            ADD "profileImage" character varying
        `);
        await queryRunner.query(`
            ALTER TABLE "school"
            ALTER COLUMN "address_line_1" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "school"
            ALTER COLUMN "address_line_2" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "school"
            ALTER COLUMN "city" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "school"
            ALTER COLUMN "state" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "school"
            ALTER COLUMN "zip" DROP NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "school"
            ALTER COLUMN "zip"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "school"
            ALTER COLUMN "state"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "school"
            ALTER COLUMN "city"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "school"
            ALTER COLUMN "address_line_2"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "school"
            ALTER COLUMN "address_line_1"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "school" DROP COLUMN "profileImage"
        `);
    }

}
