import { MigrationInterface } from 'typeorm'
import { QueryRunner }        from 'typeorm'

export class AddPhoto1567500794193 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('ALTER TABLE "user" DROP COLUMN "profilePhotoid"')
    await queryRunner.query('ALTER TABLE "user" ADD "profilePhotoId" character varying')
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('ALTER TABLE "user" DROP COLUMN "profilePhotoId"')
    await queryRunner.query('ALTER TABLE "user" ADD "profilePhotoid" character varying')
  }
}
