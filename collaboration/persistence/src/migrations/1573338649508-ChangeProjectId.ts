/* eslint-disable @typescript-eslint/no-empty-function */
import { MigrationInterface } from 'typeorm'
import { QueryRunner }        from 'typeorm'

export class ChangeProjectId1573338649508 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('ALTER TABLE "project" ALTER COLUMN "id" TYPE VARCHAR', undefined)
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
