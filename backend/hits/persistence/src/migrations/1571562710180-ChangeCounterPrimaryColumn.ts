import { MigrationInterface, QueryRunner } from 'typeorm'

export class ChangeCounterPrimaryColumn1571562710180 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      'ALTER TABLE "counter" DROP CONSTRAINT "UQ_6ef9a2c2ca1dfc9dad9accb08d6"',
      undefined
    )
    await queryRunner.query('ALTER TABLE "counter" DROP COLUMN "resource"', undefined)
    await queryRunner.query('ALTER TABLE "counter" DROP COLUMN "count"', undefined)
    await queryRunner.query(
      'ALTER TABLE "counter" ADD "value" integer NOT NULL DEFAULT 0',
      undefined
    )
    await queryRunner.query(
      'ALTER TABLE "counter" DROP CONSTRAINT "PK_012f437b30fcf5a172841392ef3"',
      undefined
    )
    await queryRunner.query('ALTER TABLE "counter" DROP COLUMN "id"', undefined)
    await queryRunner.query('ALTER TABLE "counter" ADD "id" character varying NOT NULL', undefined)
    await queryRunner.query(
      'ALTER TABLE "counter" ADD CONSTRAINT "PK_012f437b30fcf5a172841392ef3" PRIMARY KEY ("id")',
      undefined
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      'ALTER TABLE "counter" DROP CONSTRAINT "PK_012f437b30fcf5a172841392ef3"',
      undefined
    )
    await queryRunner.query('ALTER TABLE "counter" DROP COLUMN "id"', undefined)
    await queryRunner.query('ALTER TABLE "counter" ADD "id" uuid NOT NULL', undefined)
    await queryRunner.query(
      'ALTER TABLE "counter" ADD CONSTRAINT "PK_012f437b30fcf5a172841392ef3" PRIMARY KEY ("id")',
      undefined
    )
    await queryRunner.query('ALTER TABLE "counter" DROP COLUMN "value"', undefined)
    await queryRunner.query(
      'ALTER TABLE "counter" ADD "count" integer NOT NULL DEFAULT 0',
      undefined
    )
    await queryRunner.query(
      'ALTER TABLE "counter" ADD "resource" character varying NOT NULL',
      undefined
    )
    await queryRunner.query(
      'ALTER TABLE "counter" ADD CONSTRAINT "UQ_6ef9a2c2ca1dfc9dad9accb08d6" UNIQUE ("resource")',
      undefined
    )
  }
}
