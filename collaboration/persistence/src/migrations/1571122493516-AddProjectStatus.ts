import { MigrationInterface } from 'typeorm'
import { QueryRunner }        from 'typeorm'

export class AddProjectStatus1571122493516 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      "CREATE TYPE \"project_status_enum\" AS ENUM('draft', 'published', 'performed', 'completed')",
      undefined
    )
    await queryRunner.query(
      'ALTER TABLE "project" ADD "status" "project_status_enum" NOT NULL DEFAULT \'draft\'',
      undefined
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('ALTER TABLE "project" DROP COLUMN "status"', undefined)
    await queryRunner.query('DROP TYPE "project_status_enum"', undefined)
  }
}
