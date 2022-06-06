import { MigrationInterface } from 'typeorm'
import { QueryRunner }        from 'typeorm'

export class AddReplyStatus1571078719489 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      "CREATE TYPE \"reply_status_enum\" AS ENUM('new', 'candidate', 'denied', 'chosen')",
      undefined
    )
    await queryRunner.query(
      'ALTER TABLE "reply" ADD "status" "reply_status_enum" NOT NULL DEFAULT \'new\'',
      undefined
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('ALTER TABLE "reply" DROP COLUMN "status"', undefined)
    await queryRunner.query('DROP TYPE "reply_status_enum"', undefined)
  }
}
