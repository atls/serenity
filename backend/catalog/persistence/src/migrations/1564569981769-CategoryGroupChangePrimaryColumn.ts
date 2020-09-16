import { MigrationInterface, QueryRunner } from 'typeorm'

export class CategoryGroupChangePrimaryColumn1564569981769 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('DELETE FROM "category";')
    await queryRunner.query('DELETE FROM "category_group";')

    await queryRunner.query(
      'ALTER TABLE "category" DROP CONSTRAINT "FK_8f10a7ed9195884100d46c26404"'
    )
    await queryRunner.query(
      'ALTER TABLE "category_group" DROP CONSTRAINT "PK_dc80af15ad8913831d0c359018d"'
    )
    await queryRunner.query('ALTER TABLE "category_group" DROP COLUMN "id"')
    await queryRunner.query('ALTER TABLE "category_group" ADD "id" uuid NOT NULL')
    await queryRunner.query(
      'ALTER TABLE "category_group" ADD CONSTRAINT "PK_dc80af15ad8913831d0c359018d" PRIMARY KEY ("id")'
    )
    await queryRunner.query(
      'ALTER TABLE "category" DROP CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03"'
    )
    await queryRunner.query('ALTER TABLE "category" DROP COLUMN "id"')
    await queryRunner.query('ALTER TABLE "category" ADD "id" uuid NOT NULL')
    await queryRunner.query(
      'ALTER TABLE "category" ADD CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id")'
    )
    await queryRunner.query('ALTER TABLE "category" DROP COLUMN "groupId"')
    await queryRunner.query('ALTER TABLE "category" ADD "groupId" uuid')
    await queryRunner.query(
      'ALTER TABLE "category" ADD CONSTRAINT "FK_8f10a7ed9195884100d46c26404" FOREIGN KEY ("groupId") REFERENCES "category_group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION'
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      'ALTER TABLE "category" DROP CONSTRAINT "FK_8f10a7ed9195884100d46c26404"'
    )
    await queryRunner.query('ALTER TABLE "category" DROP COLUMN "groupId"')
    await queryRunner.query('ALTER TABLE "category" ADD "groupId" integer')
    await queryRunner.query(
      'ALTER TABLE "category" DROP CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03"'
    )
    await queryRunner.query('ALTER TABLE "category" DROP COLUMN "id"')
    await queryRunner.query('ALTER TABLE "category" ADD "id" SERIAL NOT NULL')
    await queryRunner.query(
      'ALTER TABLE "category" ADD CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id")'
    )
    await queryRunner.query(
      'ALTER TABLE "category_group" DROP CONSTRAINT "PK_dc80af15ad8913831d0c359018d"'
    )
    await queryRunner.query('ALTER TABLE "category_group" DROP COLUMN "id"')
    await queryRunner.query('ALTER TABLE "category_group" ADD "id" SERIAL NOT NULL')
    await queryRunner.query(
      'ALTER TABLE "category_group" ADD CONSTRAINT "PK_dc80af15ad8913831d0c359018d" PRIMARY KEY ("id")'
    )
    await queryRunner.query(
      'ALTER TABLE "category" ADD CONSTRAINT "FK_8f10a7ed9195884100d46c26404" FOREIGN KEY ("groupId") REFERENCES "category_group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION'
    )
  }
}
