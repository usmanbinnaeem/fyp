import { MigrationInterface, QueryRunner } from "typeorm";

export class updatedParentDriverEntities1679992340085 implements MigrationInterface {
    name = 'updatedParentDriverEntities1679992340085'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "parent" (
                "id" SERIAL NOT NULL,
                "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
                "firstName" character varying,
                "lastName" character varying,
                "email" character varying,
                "address_line_1" character varying,
                "address_line_2" character varying,
                "city" character varying,
                "state" character varying,
                "zip" character varying,
                "userId" integer,
                CONSTRAINT "REL_a51bd21a6e90dbe656ad65cab8" UNIQUE ("userId"),
                CONSTRAINT "PK_bf93c41ee1ae1649869ebd05617" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "driver" (
                "id" SERIAL NOT NULL,
                "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
                "firstName" character varying,
                "lastName" character varying,
                "licenseNo" character varying,
                "address_line_1" character varying,
                "address_line_2" character varying,
                "city" character varying,
                "state" character varying,
                "zip" character varying,
                "approved" boolean,
                "userId" integer,
                CONSTRAINT "REL_abf4fe92b1ed7d4ffa2d4e8045" UNIQUE ("userId"),
                CONSTRAINT "PK_61de71a8d217d585ecd5ee3d065" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD CONSTRAINT "UQ_f2578043e491921209f5dadd080" UNIQUE ("phoneNumber")
        `);
        await queryRunner.query(`
            ALTER TABLE "parent"
            ADD CONSTRAINT "FK_a51bd21a6e90dbe656ad65cab89" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "driver"
            ADD CONSTRAINT "FK_abf4fe92b1ed7d4ffa2d4e8045a" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "driver" DROP CONSTRAINT "FK_abf4fe92b1ed7d4ffa2d4e8045a"
        `);
        await queryRunner.query(`
            ALTER TABLE "parent" DROP CONSTRAINT "FK_a51bd21a6e90dbe656ad65cab89"
        `);
        await queryRunner.query(`
            ALTER TABLE "user" DROP CONSTRAINT "UQ_f2578043e491921209f5dadd080"
        `);
        await queryRunner.query(`
            ALTER TABLE "user" DROP COLUMN "updatedAt"
        `);
        await queryRunner.query(`
            ALTER TABLE "user" DROP COLUMN "createdAt"
        `);
        await queryRunner.query(`
            DROP TABLE "driver"
        `);
        await queryRunner.query(`
            DROP TABLE "parent"
        `);
    }

}
