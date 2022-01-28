import { MigrationInterface } from 'typeorm'
import { QueryRunner }        from 'typeorm'

export class ChangeSpecialisationDefaults1571472097294 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      'ALTER TABLE "specialist" ALTER COLUMN "specialisationMain" DROP NOT NULL',
      undefined
    )
    await queryRunner.query(
      'ALTER TABLE "specialist" ALTER COLUMN "specialisationMain" DROP DEFAULT',
      undefined
    )
    await queryRunner.query(
      'ALTER TABLE "specialist" ALTER COLUMN "specialisationAdditional" DROP NOT NULL',
      undefined
    )
    await queryRunner.query(
      'ALTER TABLE "specialist" ALTER COLUMN "specialisationAdditional" DROP DEFAULT',
      undefined
    )
    await queryRunner.query(
      'UPDATE "specialist" SET "specialisationAdditional" = null WHERE "specialisationAdditional" = \'[]\'',
      undefined
    )
    await queryRunner.query(
      'UPDATE "specialist" SET "specialisationMain" = null WHERE "specialisationMain" = \'[]\'',
      undefined
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      'ALTER TABLE "specialist" ALTER COLUMN "specialisationAdditional" SET DEFAULT \'[]\'',
      undefined
    )
    await queryRunner.query(
      'ALTER TABLE "specialist" ALTER COLUMN "specialisationAdditional" SET NOT NULL',
      undefined
    )
    await queryRunner.query(
      'ALTER TABLE "specialist" ALTER COLUMN "specialisationMain" SET DEFAULT \'[]\'',
      undefined
    )
    await queryRunner.query(
      'ALTER TABLE "specialist" ALTER COLUMN "specialisationMain" SET NOT NULL',
      undefined
    )
  }
}
