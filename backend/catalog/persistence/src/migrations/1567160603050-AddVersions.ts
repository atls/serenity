import { MigrationInterface } from 'typeorm'
import { QueryRunner }        from 'typeorm'

export class AddVersions1567160603050 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('ALTER TABLE "category" ADD "version" integer NOT NULL DEFAULT 0')
    await queryRunner.query('ALTER TABLE "category_group" ADD "version" integer NOT NULL DEFAULT 0')
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('ALTER TABLE "category_group" DROP COLUMN "version"')
    await queryRunner.query('ALTER TABLE "category" DROP COLUMN "version"')
  }
}
