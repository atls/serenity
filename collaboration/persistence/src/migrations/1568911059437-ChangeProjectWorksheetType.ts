import { MigrationInterface } from 'typeorm'
import { QueryRunner }        from 'typeorm'

export class ChangeProjectWorksheetType1568911059437 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('ALTER TABLE "project" DROP COLUMN "worksheet"', undefined)
    await queryRunner.query(
      'ALTER TABLE "project" ADD "worksheet" text NOT NULL DEFAULT \'{}\'',
      undefined
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('ALTER TABLE "project" DROP COLUMN "worksheet"', undefined)
    await queryRunner.query(
      'ALTER TABLE "project" ADD "worksheet" character varying NOT NULL DEFAULT \'{}\'',
      undefined
    )
  }
}
