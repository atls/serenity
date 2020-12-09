import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddDefaultCounter1571562091269 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('ALTER TABLE "counter" ALTER COLUMN "count" SET DEFAULT 0', undefined)
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('ALTER TABLE "counter" ALTER COLUMN "count" DROP DEFAULT', undefined)
  }
}
