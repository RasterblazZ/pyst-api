import { MigrationInterface, QueryRunner } from "typeorm";

export class Migraciones1778709602998 implements MigrationInterface {
    name = 'Migraciones1778709602998'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id_user" SERIAL NOT NULL, "name" character varying NOT NULL, "last_names" character varying NOT NULL, "email" character varying NOT NULL, "country" character varying NOT NULL, "language" character varying NOT NULL, "favorite_currency" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_9664961c0264d34a3cf82b11700" PRIMARY KEY ("id_user"))`);
        await queryRunner.query(`CREATE TABLE "currency" ("id_currency" SERIAL NOT NULL, "abbreviation" character varying NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_c17b5cf329de47ed10ae4149bc2" PRIMARY KEY ("id_currency"))`);
        await queryRunner.query(`CREATE TABLE "user_subscription" ("id_user_subscription" SERIAL NOT NULL, "id_user" integer NOT NULL, "id_subscription" integer NOT NULL, "id_currency" integer NOT NULL, "frecuency" character varying NOT NULL, "day_number" integer NOT NULL, "amount" integer NOT NULL, CONSTRAINT "PK_459075cba3eb2b9574df06d409e" PRIMARY KEY ("id_user_subscription"))`);
        await queryRunner.query(`CREATE TABLE "user_earning" ("id_user_earning" SERIAL NOT NULL, "id_user" integer NOT NULL, "id_currency" integer NOT NULL, "name" character varying NOT NULL, "frecuency" character varying NOT NULL, "day_number" integer NOT NULL, "amount" integer NOT NULL, CONSTRAINT "PK_76692257ed6e2cd83d6dd40f518" PRIMARY KEY ("id_user_earning"))`);
        await queryRunner.query(`CREATE TABLE "user_diary" ("id_user_diary" SERIAL NOT NULL, "id_user" integer NOT NULL, "id_currency" integer NOT NULL, "type" integer NOT NULL, "date" TIMESTAMP NOT NULL, "name" character varying NOT NULL, "amount" integer NOT NULL, CONSTRAINT "PK_deb11967dbeb1c7a583c25ede50" PRIMARY KEY ("id_user_diary"))`);
        await queryRunner.query(`CREATE TABLE "subscription" ("id_subscription" SERIAL NOT NULL, "id_subscription_type" integer NOT NULL, "name" character varying NOT NULL, "suggested_currency" character varying NOT NULL, "suggested_amount" character varying NOT NULL, "subscription_type_id" integer, CONSTRAINT "PK_3b4acffa23eebf518148f98a3ae" PRIMARY KEY ("id_subscription"))`);
        await queryRunner.query(`CREATE TABLE "subscription_type_entity" ("id_subscription_type" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_d21d6448bccfd4dd443a87f17a1" PRIMARY KEY ("id_subscription_type"))`);
        await queryRunner.query(`ALTER TABLE "user_subscription" ADD CONSTRAINT "FK_4e0fa58e5339e244cdcb6329434" FOREIGN KEY ("id_user") REFERENCES "user"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_subscription" ADD CONSTRAINT "FK_22c651bfa636d52777694e0d3ed" FOREIGN KEY ("id_currency") REFERENCES "currency"("id_currency") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_earning" ADD CONSTRAINT "FK_83f1392b279c88319ac48567bc5" FOREIGN KEY ("id_user") REFERENCES "user"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_earning" ADD CONSTRAINT "FK_a1371c7fa565ad04a1c3bf3eb68" FOREIGN KEY ("id_currency") REFERENCES "currency"("id_currency") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_diary" ADD CONSTRAINT "FK_ec6c385926a698500d0c942dc3a" FOREIGN KEY ("id_user") REFERENCES "user"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_diary" ADD CONSTRAINT "FK_f1dd011183d784c79ef1bceaa2a" FOREIGN KEY ("id_currency") REFERENCES "currency"("id_currency") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subscription" ADD CONSTRAINT "FK_d2f304754e23fab1bcd101752a3" FOREIGN KEY ("subscription_type_id") REFERENCES "subscription_type_entity"("id_subscription_type") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subscription" DROP CONSTRAINT "FK_d2f304754e23fab1bcd101752a3"`);
        await queryRunner.query(`ALTER TABLE "user_diary" DROP CONSTRAINT "FK_f1dd011183d784c79ef1bceaa2a"`);
        await queryRunner.query(`ALTER TABLE "user_diary" DROP CONSTRAINT "FK_ec6c385926a698500d0c942dc3a"`);
        await queryRunner.query(`ALTER TABLE "user_earning" DROP CONSTRAINT "FK_a1371c7fa565ad04a1c3bf3eb68"`);
        await queryRunner.query(`ALTER TABLE "user_earning" DROP CONSTRAINT "FK_83f1392b279c88319ac48567bc5"`);
        await queryRunner.query(`ALTER TABLE "user_subscription" DROP CONSTRAINT "FK_22c651bfa636d52777694e0d3ed"`);
        await queryRunner.query(`ALTER TABLE "user_subscription" DROP CONSTRAINT "FK_4e0fa58e5339e244cdcb6329434"`);
        await queryRunner.query(`DROP TABLE "subscription_type_entity"`);
        await queryRunner.query(`DROP TABLE "subscription"`);
        await queryRunner.query(`DROP TABLE "user_diary"`);
        await queryRunner.query(`DROP TABLE "user_earning"`);
        await queryRunner.query(`DROP TABLE "user_subscription"`);
        await queryRunner.query(`DROP TABLE "currency"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
