import { MigrationInterface, QueryRunner } from "typeorm";

export class editTitleDecorator1680276653759 implements MigrationInterface {
    name = 'editTitleDecorator1680276653759'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasks" RENAME COLUMN "tile" TO "title"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasks" RENAME COLUMN "title" TO "tile"`);
    }

}
