import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddMessageDateAndRead1572772109648 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('ALTER TABLE "message" ADD "sendDate" TIMESTAMP', undefined)
    await queryRunner.query(
      'ALTER TABLE "message" ADD "read" boolean NOT NULL DEFAULT false',
      undefined
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('ALTER TABLE "message" DROP COLUMN "read"', undefined)
    await queryRunner.query('ALTER TABLE "message" DROP COLUMN "sendDate"', undefined)
  }
}
