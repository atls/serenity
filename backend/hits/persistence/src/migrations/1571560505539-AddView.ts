import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddView1571560505539 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      'CREATE TABLE "view" ("id" uuid NOT NULL, "version" integer NOT NULL DEFAULT 0, "subject" character varying NOT NULL, "resource" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_86cfb9e426c77d60b900fe2b543" PRIMARY KEY ("id"))',
      undefined
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_09bdf7cb878aac917493d5dc46" ON "view" ("subject", "resource") ',
      undefined
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('DROP INDEX "IDX_09bdf7cb878aac917493d5dc46"', undefined)
    await queryRunner.query('DROP TABLE "view"', undefined)
  }
}
