import { MigrationInterface } from 'typeorm'
import { QueryRunner }        from 'typeorm'

export class AddSpecialistStat1571588728385 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      'ALTER TABLE "specialist" ADD "reviewCount" integer NOT NULL DEFAULT 0',
      undefined
    )
    await queryRunner.query(
      'ALTER TABLE "specialist" ADD "completedProjects" integer NOT NULL DEFAULT 0',
      undefined
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('ALTER TABLE "specialist" DROP COLUMN "completedProjects"', undefined)
    await queryRunner.query('ALTER TABLE "specialist" DROP COLUMN "reviewCount"', undefined)
  }
}
