import { MigrationInterface, QueryRunner } from 'typeorm'

export class InteractionFormOfWorkDefaultFix1571378432964 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      'ALTER TABLE "specialist" ALTER COLUMN "interactionFormofwork" SET DEFAULT \'person\'',
      undefined
    )
    await queryRunner.query(
      'ALTER TABLE "specialist" ALTER COLUMN "interactionFormofwork" SET NOT NULL',
      undefined
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      'ALTER TABLE "specialist" ALTER COLUMN "interactionFormofwork" DROP NOT NULL',
      undefined
    )
    await queryRunner.query(
      'ALTER TABLE "specialist" ALTER COLUMN "interactionFormofwork" DROP DEFAULT',
      undefined
    )
  }
}
