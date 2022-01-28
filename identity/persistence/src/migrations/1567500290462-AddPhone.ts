import { MigrationInterface } from 'typeorm'
import { QueryRunner }        from 'typeorm'

export class AddPhone1567500290462 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE "user" RENAME COLUMN "profileContactInformationPhone" TO "profileContactInformationPhoneNumber"`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE "user" RENAME COLUMN "profileContactInformationPhoneNumber" TO "profileContactInformationPhone"`
    )
  }
}
