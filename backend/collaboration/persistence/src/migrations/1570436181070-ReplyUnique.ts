import { MigrationInterface, QueryRunner } from 'typeorm'

export class ReplyUnique1570436181070 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_39a03911c3037819e2db3919fc" ON "reply" ("projectId", "specialistId") ',
      undefined
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('DROP INDEX "IDX_39a03911c3037819e2db3919fc"', undefined)
  }
}
