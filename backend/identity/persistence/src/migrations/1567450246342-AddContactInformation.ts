import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddContactInformation1567450246342 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('ALTER TABLE "user" ADD "profilePhotoid" character varying')
    await queryRunner.query(
      'ALTER TABLE "user" ADD "profileContactInformationPhone" character varying'
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('ALTER TABLE "user" DROP COLUMN "profileContactInformationPhone"')
    await queryRunner.query('ALTER TABLE "user" DROP COLUMN "profilePhotoid"')
  }
}
