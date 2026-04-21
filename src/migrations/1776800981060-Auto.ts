import { MigrationInterface, QueryRunner } from "typeorm";

export class Auto1776800981060 implements MigrationInterface {
    name = 'Auto1776800981060'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id_user" SERIAL NOT NULL, "name" character varying NOT NULL, "last_names" character varying NOT NULL, "email" character varying NOT NULL, "country" character varying NOT NULL, "language" character varying NOT NULL, "favorite_currency" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_9664961c0264d34a3cf82b11700" PRIMARY KEY ("id_user"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
