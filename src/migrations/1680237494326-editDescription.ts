import { MigrationInterface, QueryRunner } from "typeorm";

export class editDescription1680237494326 implements MigrationInterface {
    name = 'editDescription1680237494326'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD "description" character varying(300) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD "description" character varying(150) NOT NULL`);
    }

}
