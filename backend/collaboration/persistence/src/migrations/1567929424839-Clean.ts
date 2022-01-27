/* eslint-disable @typescript-eslint/no-empty-function */
import { MigrationInterface } from 'typeorm'
import { QueryRunner }        from 'typeorm'

export class Clean1567929424839 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('DROP TABLE IF EXISTS "specialist"')

    await queryRunner.query('DROP TYPE IF EXISTS "specialist_interactionformofwork_enum"')
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
