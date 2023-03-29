import { MigrationInterface, QueryRunner } from "typeorm";

export class createdRemainingSchemas1680091710335 implements MigrationInterface {
    name = 'createdRemainingSchemas1680091710335'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "school_driver" (
                "id" SERIAL NOT NULL,
                "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
                "driverId" integer,
                "schoolId" integer,
                CONSTRAINT "PK_4076adff37165ce8e97b9d6b910" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "school" (
                "id" SERIAL NOT NULL,
                "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
                "name" character varying NOT NULL,
                "email" character varying NOT NULL,
                "address_line_1" character varying NOT NULL,
                "address_line_2" character varying NOT NULL,
                "city" character varying NOT NULL,
                "state" character varying NOT NULL,
                "zip" character varying NOT NULL,
                CONSTRAINT "PK_57836c3fe2f2c7734b20911755e" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "student" (
                "id" SERIAL NOT NULL,
                "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
                "name" character varying NOT NULL,
                "parentId" integer,
                "vehicleId" integer,
                "schoolId" integer,
                CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "vehicle" (
                "id" SERIAL NOT NULL,
                "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
                "regNo" character varying NOT NULL,
                "seats_capacity" character varying NOT NULL,
                "booked_seats" character varying NOT NULL,
                "color" character varying NOT NULL,
                "modal" character varying NOT NULL,
                "verified" character varying NOT NULL,
                "driverId" integer,
                CONSTRAINT "REL_cbb46518af7f7bf832253c62e0" UNIQUE ("driverId"),
                CONSTRAINT "PK_187fa17ba39d367e5604b3d1ec9" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "school_driver"
            ADD CONSTRAINT "FK_4177b96247c467dd531472c1ce1" FOREIGN KEY ("driverId") REFERENCES "driver"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "school_driver"
            ADD CONSTRAINT "FK_eb631e14a29f5ab18e4b6041471" FOREIGN KEY ("schoolId") REFERENCES "school"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "student"
            ADD CONSTRAINT "FK_d728e971c60c58a818dd9e614ab" FOREIGN KEY ("parentId") REFERENCES "parent"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "student"
            ADD CONSTRAINT "FK_ba534bc3b1edc511259107bd683" FOREIGN KEY ("vehicleId") REFERENCES "vehicle"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "student"
            ADD CONSTRAINT "FK_c375f35160f921f4fab5f515d30" FOREIGN KEY ("schoolId") REFERENCES "school"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "vehicle"
            ADD CONSTRAINT "FK_cbb46518af7f7bf832253c62e08" FOREIGN KEY ("driverId") REFERENCES "driver"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "vehicle" DROP CONSTRAINT "FK_cbb46518af7f7bf832253c62e08"
        `);
        await queryRunner.query(`
            ALTER TABLE "student" DROP CONSTRAINT "FK_c375f35160f921f4fab5f515d30"
        `);
        await queryRunner.query(`
            ALTER TABLE "student" DROP CONSTRAINT "FK_ba534bc3b1edc511259107bd683"
        `);
        await queryRunner.query(`
            ALTER TABLE "student" DROP CONSTRAINT "FK_d728e971c60c58a818dd9e614ab"
        `);
        await queryRunner.query(`
            ALTER TABLE "school_driver" DROP CONSTRAINT "FK_eb631e14a29f5ab18e4b6041471"
        `);
        await queryRunner.query(`
            ALTER TABLE "school_driver" DROP CONSTRAINT "FK_4177b96247c467dd531472c1ce1"
        `);
        await queryRunner.query(`
            DROP TABLE "vehicle"
        `);
        await queryRunner.query(`
            DROP TABLE "student"
        `);
        await queryRunner.query(`
            DROP TABLE "school"
        `);
        await queryRunner.query(`
            DROP TABLE "school_driver"
        `);
    }

}
