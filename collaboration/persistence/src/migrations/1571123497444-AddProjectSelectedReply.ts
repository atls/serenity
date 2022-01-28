import { MigrationInterface } from 'typeorm'
import { QueryRunner }        from 'typeorm'

export class AddProjectSelectedReply1571123497444 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      'ALTER TABLE "project" ADD "selectedReplyId" character varying',
      undefined
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('ALTER TABLE "project" DROP COLUMN "selectedReplyId"', undefined)
  }
}
