import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddSpecialistAccount1572081645676 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      "CREATE TYPE \"specialist_accounttype_enum\" AS ENUM('free', 'pro')",
      undefined
    )
    await queryRunner.query(
      'ALTER TABLE "specialist" ADD "accountType" "specialist_accounttype_enum" NOT NULL DEFAULT \'free\'',
      undefined
    )
    await queryRunner.query(
      'ALTER TABLE "specialist" ADD "accountStat" jsonb NOT NULL DEFAULT \'{}\'',
      undefined
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('ALTER TABLE "specialist" DROP COLUMN "accountStat"', undefined)
    await queryRunner.query('ALTER TABLE "specialist" DROP COLUMN "accountType"', undefined)
    await queryRunner.query('DROP TYPE "specialist_accounttype_enum"', undefined)
  }
}
