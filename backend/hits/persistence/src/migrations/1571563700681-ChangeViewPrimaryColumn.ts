import { MigrationInterface, QueryRunner } from 'typeorm'

export class ChangeViewPrimaryColumn1571563700681 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      'ALTER TABLE "view" DROP CONSTRAINT "PK_86cfb9e426c77d60b900fe2b543"',
      undefined
    )
    await queryRunner.query('ALTER TABLE "view" DROP COLUMN "id"', undefined)
    await queryRunner.query('ALTER TABLE "view" ADD "id" SERIAL NOT NULL', undefined)
    await queryRunner.query(
      'ALTER TABLE "view" ADD CONSTRAINT "PK_86cfb9e426c77d60b900fe2b543" PRIMARY KEY ("id")',
      undefined
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      'ALTER TABLE "view" DROP CONSTRAINT "PK_86cfb9e426c77d60b900fe2b543"',
      undefined
    )
    await queryRunner.query('ALTER TABLE "view" DROP COLUMN "id"', undefined)
    await queryRunner.query('ALTER TABLE "view" ADD "id" uuid NOT NULL', undefined)
    await queryRunner.query(
      'ALTER TABLE "view" ADD CONSTRAINT "PK_86cfb9e426c77d60b900fe2b543" PRIMARY KEY ("id")',
      undefined
    )
  }
}
