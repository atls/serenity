import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddProject1568147741987 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('CREATE TYPE "project_beginningofwork_enum" AS ENUM(\'soon\')')
    await queryRunner.query(
      'CREATE TABLE "project" ("id" uuid NOT NULL, "version" integer NOT NULL DEFAULT 0, "customerId" character varying NOT NULL, "name" character varying NOT NULL, "categoryId" character varying NOT NULL, "budget" integer NOT NULL, "legalEntitiesOnly" boolean NOT NULL, "beginningOfWork" "project_beginningofwork_enum", "description" character varying, "photos" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "addressFormatted" character varying, CONSTRAINT "PK_4d68b1358bb5b766d3e78f32f57" PRIMARY KEY ("id"))'
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('DROP TABLE "project"')
    await queryRunner.query('DROP TYPE "project_beginningofwork_enum"')
  }
}
