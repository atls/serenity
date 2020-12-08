import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddCustomerProjectStat1572363262445 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      'ALTER TABLE "customer" ADD "openProjects" integer NOT NULL DEFAULT 0',
      undefined
    )
    await queryRunner.query(
      'ALTER TABLE "customer" ADD "completedProjects" integer NOT NULL DEFAULT 0',
      undefined
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('ALTER TABLE "customer" DROP COLUMN "completedProjects"', undefined)
    await queryRunner.query('ALTER TABLE "customer" DROP COLUMN "openProjects"', undefined)
  }
}
