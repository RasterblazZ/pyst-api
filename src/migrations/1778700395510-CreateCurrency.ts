import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCurrency1778700395510 implements MigrationInterface {
    name = 'CreateCurrency1778700395510'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "currency" ("id_currency" SERIAL NOT NULL, "abbreviation" character varying NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_c17b5cf329de47ed10ae4149bc2" PRIMARY KEY ("id_currency"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "currency"`);
    }

}
