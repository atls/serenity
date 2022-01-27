import { MigrationInterface } from 'typeorm'
import { QueryRunner }        from 'typeorm'

export class AddProjectReplyCount1571581060117 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      'ALTER TABLE "project" ADD "replyCount" integer NOT NULL DEFAULT 0',
      undefined
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('ALTER TABLE "project" DROP COLUMN "replyCount"', undefined)
  }
}
