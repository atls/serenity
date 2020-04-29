import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddAddressWebsite1567930654979 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('ALTER TABLE "user" ADD "profileWebsite" character varying')
    await queryRunner.query('ALTER TABLE "user" ADD "profileAddressFormatted" character varying')
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('ALTER TABLE "user" DROP COLUMN "profileAddressFormatted"')
    await queryRunner.query('ALTER TABLE "user" DROP COLUMN "profileWebsite"')
  }
}
