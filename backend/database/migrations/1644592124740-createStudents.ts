import {MigrationInterface, QueryRunner} from "typeorm";

export class createStudents1644592124740 implements MigrationInterface {
    name = 'createStudents1644592124740'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "students" ("cpf" character varying NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "UQ_25985d58c714a4a427ced57507b" UNIQUE ("email"), CONSTRAINT "PK_f6fb3427bdbd16321776573d176" PRIMARY KEY ("cpf"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "students"`);
    }

}
