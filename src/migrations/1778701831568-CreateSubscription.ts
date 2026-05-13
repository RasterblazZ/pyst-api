import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateSubscription1778701831568 implements MigrationInterface {
    name = 'CreateSubscription1778701831568'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "subscription_type_entity" ("id_subscription_type" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_d21d6448bccfd4dd443a87f17a1" PRIMARY KEY ("id_subscription_type"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "subscription_type_entity"`);
    }

}
