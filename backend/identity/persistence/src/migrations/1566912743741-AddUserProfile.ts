import { MigrationInterface } from 'typeorm'
import { QueryRunner }        from 'typeorm'

export class AddUserProfile1566912743741 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      "CREATE TYPE \"user_profiletype_enum\" AS ENUM('specialist', 'customer')"
    )
    await queryRunner.query('ALTER TABLE "user" ADD "profileType" "user_profiletype_enum"')
    await queryRunner.query(
      'ALTER TABLE "user" ADD "profilePersonalInformationFirstname" character varying'
    )
    await queryRunner.query(
      'ALTER TABLE "user" ADD "profilePersonalInformationLastname" character varying'
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('ALTER TABLE "user" DROP COLUMN "profilePersonalInformationLastname"')
    await queryRunner.query('ALTER TABLE "user" DROP COLUMN "profilePersonalInformationFirstname"')
    await queryRunner.query('ALTER TABLE "user" DROP COLUMN "profileType"')
    await queryRunner.query('DROP TYPE "user_profiletype_enum"')
  }
}
