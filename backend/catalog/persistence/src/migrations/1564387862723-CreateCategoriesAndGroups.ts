import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateCategoriesAndGroups1564387862723 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      'CREATE TABLE "category_group" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_dc80af15ad8913831d0c359018d" PRIMARY KEY ("id"))'
    )
    await queryRunner.query(
      'CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "groupId" integer, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))'
    )
    await queryRunner.query(
      'ALTER TABLE "category" ADD CONSTRAINT "FK_8f10a7ed9195884100d46c26404" FOREIGN KEY ("groupId") REFERENCES "category_group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION'
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      'ALTER TABLE "category" DROP CONSTRAINT "FK_8f10a7ed9195884100d46c26404"'
    )
    await queryRunner.query('DROP TABLE "category"')
    await queryRunner.query('DROP TABLE "category_group"')
  }
}
