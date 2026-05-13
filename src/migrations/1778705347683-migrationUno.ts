import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrationUno1778705347683 implements MigrationInterface {
    name = 'MigrationUno1778705347683'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id_user" SERIAL NOT NULL, "name" character varying NOT NULL, "last_names" character varying NOT NULL, "email" character varying NOT NULL, "country" character varying NOT NULL, "language" character varying NOT NULL, "favorite_currency" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_9664961c0264d34a3cf82b11700" PRIMARY KEY ("id_user"))`);
        await queryRunner.query(`CREATE TABLE "subscription" ("id_subscription" SERIAL NOT NULL, "id_subscription_type" integer NOT NULL, "name" character varying NOT NULL, "suggested_currency" character varying NOT NULL, "suggested_amount" character varying NOT NULL, "subscription_type_id" integer, CONSTRAINT "PK_3b4acffa23eebf518148f98a3ae" PRIMARY KEY ("id_subscription"))`);
        await queryRunner.query(`CREATE TABLE "subscription_type_entity" ("id_subscription_type" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_d21d6448bccfd4dd443a87f17a1" PRIMARY KEY ("id_subscription_type"))`);
        await queryRunner.query(`CREATE TABLE "currency" ("id_currency" SERIAL NOT NULL, "abbreviation" character varying NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_c17b5cf329de47ed10ae4149bc2" PRIMARY KEY ("id_currency"))`);
        await queryRunner.query(`ALTER TABLE "subscription" ADD CONSTRAINT "FK_d2f304754e23fab1bcd101752a3" FOREIGN KEY ("subscription_type_id") REFERENCES "subscription_type_entity"("id_subscription_type") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subscription" DROP CONSTRAINT "FK_d2f304754e23fab1bcd101752a3"`);
        await queryRunner.query(`DROP TABLE "currency"`);
        await queryRunner.query(`DROP TABLE "subscription_type_entity"`);
        await queryRunner.query(`DROP TABLE "subscription"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
