import { MigrationInterface } from 'typeorm'
import { QueryRunner }        from 'typeorm'

export class AddSpecialistRating1571476440345 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      'ALTER TABLE "specialist" ADD "rating" integer NOT NULL DEFAULT 0',
      undefined
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('ALTER TABLE "specialist" DROP COLUMN "rating"', undefined)
  }
}
