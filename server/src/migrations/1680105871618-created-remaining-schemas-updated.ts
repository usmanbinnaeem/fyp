import { MigrationInterface, QueryRunner } from "typeorm";

export class createdRemainingSchemasUpdated1680105871618 implements MigrationInterface {
    name = 'createdRemainingSchemasUpdated1680105871618'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "driver_schools_school" (
                "driverId" integer NOT NULL,
                "schoolId" integer NOT NULL,
                CONSTRAINT "PK_d42379265d846ff7815169ad184" PRIMARY KEY ("driverId", "schoolId")
            )
        `);
        await queryRunner.query(`
            CREATE INDEX "IDX_27babe0be439f1924c4b90f007" ON "driver_schools_school" ("driverId")
        `);
        await queryRunner.query(`
            CREATE INDEX "IDX_46f6398f993a914c7cae7ea999" ON "driver_schools_school" ("schoolId")
        `);
        await queryRunner.query(`
            ALTER TABLE "driver_schools_school"
            ADD CONSTRAINT "FK_27babe0be439f1924c4b90f0076" FOREIGN KEY ("driverId") REFERENCES "driver"("id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
        await queryRunner.query(`
            ALTER TABLE "driver_schools_school"
            ADD CONSTRAINT "FK_46f6398f993a914c7cae7ea999d" FOREIGN KEY ("schoolId") REFERENCES "school"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "driver_schools_school" DROP CONSTRAINT "FK_46f6398f993a914c7cae7ea999d"
        `);
        await queryRunner.query(`
            ALTER TABLE "driver_schools_school" DROP CONSTRAINT "FK_27babe0be439f1924c4b90f0076"
        `);
        await queryRunner.query(`
            DROP INDEX "public"."IDX_46f6398f993a914c7cae7ea999"
        `);
        await queryRunner.query(`
            DROP INDEX "public"."IDX_27babe0be439f1924c4b90f007"
        `);
        await queryRunner.query(`
            DROP TABLE "driver_schools_school"
        `);
    }

}
