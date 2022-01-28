import { MigrationInterface } from 'typeorm'
import { QueryRunner }        from 'typeorm'

export class AddProjectReplyStatuses1572706843696 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      'ALTER TYPE "public"."project_status_enum" RENAME TO "project_status_enum_old"',
      undefined
    )
    await queryRunner.query(
      "CREATE TYPE \"project_status_enum\" AS ENUM('draft', 'published', 'selected', 'performed', 'completed')",
      undefined
    )
    await queryRunner.query('ALTER TABLE "project" ALTER COLUMN "status" DROP DEFAULT', undefined)
    await queryRunner.query(
      'ALTER TABLE "project" ALTER COLUMN "status" TYPE "project_status_enum" USING "status"::"text"::"project_status_enum"',
      undefined
    )
    await queryRunner.query(
      'ALTER TABLE "project" ALTER COLUMN "status" SET DEFAULT \'draft\'',
      undefined
    )
    await queryRunner.query('DROP TYPE "project_status_enum_old"', undefined)
    await queryRunner.query(
      'ALTER TYPE "public"."reply_status_enum" RENAME TO "reply_status_enum_old"',
      undefined
    )
    await queryRunner.query(
      "CREATE TYPE \"reply_status_enum\" AS ENUM('new', 'candidate', 'denied', 'chosen', 'rejected', 'performed', 'completed')",
      undefined
    )
    await queryRunner.query('ALTER TABLE "reply" ALTER COLUMN "status" DROP DEFAULT', undefined)
    await queryRunner.query(
      'ALTER TABLE "reply" ALTER COLUMN "status" TYPE "reply_status_enum" USING "status"::"text"::"reply_status_enum"',
      undefined
    )
    await queryRunner.query(
      'ALTER TABLE "reply" ALTER COLUMN "status" SET DEFAULT \'new\'',
      undefined
    )
    await queryRunner.query('DROP TYPE "reply_status_enum_old"', undefined)
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      "CREATE TYPE \"reply_status_enum_old\" AS ENUM('new', 'candidate', 'denied', 'chosen')",
      undefined
    )
    await queryRunner.query('ALTER TABLE "reply" ALTER COLUMN "status" DROP DEFAULT', undefined)
    await queryRunner.query(
      'ALTER TABLE "reply" ALTER COLUMN "status" TYPE "reply_status_enum_old" USING "status"::"text"::"reply_status_enum_old"',
      undefined
    )
    await queryRunner.query(
      'ALTER TABLE "reply" ALTER COLUMN "status" SET DEFAULT \'new\'',
      undefined
    )
    await queryRunner.query('DROP TYPE "reply_status_enum"', undefined)
    await queryRunner.query(
      'ALTER TYPE "reply_status_enum_old" RENAME TO  "reply_status_enum"',
      undefined
    )
    await queryRunner.query(
      "CREATE TYPE \"project_status_enum_old\" AS ENUM('draft', 'published', 'performed', 'completed')",
      undefined
    )
    await queryRunner.query('ALTER TABLE "project" ALTER COLUMN "status" DROP DEFAULT', undefined)
    await queryRunner.query(
      'ALTER TABLE "project" ALTER COLUMN "status" TYPE "project_status_enum_old" USING "status"::"text"::"project_status_enum_old"',
      undefined
    )
    await queryRunner.query(
      'ALTER TABLE "project" ALTER COLUMN "status" SET DEFAULT \'draft\'',
      undefined
    )
    await queryRunner.query('DROP TYPE "project_status_enum"', undefined)
    await queryRunner.query(
      'ALTER TYPE "project_status_enum_old" RENAME TO  "project_status_enum"',
      undefined
    )
  }
}
