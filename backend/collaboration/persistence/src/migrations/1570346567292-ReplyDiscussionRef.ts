import { MigrationInterface, QueryRunner } from 'typeorm'

export class ReplyDiscussionRef1570346567292 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('ALTER TABLE "reply" DROP COLUMN "discussionId"', undefined)
    await queryRunner.query('ALTER TABLE "reply" ADD "discussionId" uuid', undefined)
    await queryRunner.query(
      'ALTER TABLE "reply" ADD CONSTRAINT "UQ_ce39c81273f7bd674f97a9df256" UNIQUE ("discussionId")',
      undefined
    )
    await queryRunner.query(
      'ALTER TABLE "reply" ADD CONSTRAINT "FK_ce39c81273f7bd674f97a9df256" FOREIGN KEY ("discussionId") REFERENCES "discussion"("id") ON DELETE NO ACTION ON UPDATE NO ACTION',
      undefined
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      'ALTER TABLE "reply" DROP CONSTRAINT "FK_ce39c81273f7bd674f97a9df256"',
      undefined
    )
    await queryRunner.query(
      'ALTER TABLE "reply" DROP CONSTRAINT "UQ_ce39c81273f7bd674f97a9df256"',
      undefined
    )
    await queryRunner.query('ALTER TABLE "reply" DROP COLUMN "discussionId"', undefined)
    await queryRunner.query(
      'ALTER TABLE "reply" ADD "discussionId" character varying NOT NULL',
      undefined
    )
  }
}
