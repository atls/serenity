/* eslint-disable class-methods-use-this */
import { MigrationInterface } from 'typeorm'
import { QueryRunner }        from 'typeorm'

export class AddProjectWorksheet1568882365412 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      'ALTER TABLE "project" ADD "worksheet" character varying NOT NULL DEFAULT \'{}\'',
      undefined
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('ALTER TABLE "project" DROP COLUMN "worksheet"', undefined)
  }
}
