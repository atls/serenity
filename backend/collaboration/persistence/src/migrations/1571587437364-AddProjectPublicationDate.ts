import { MigrationInterface } from 'typeorm'
import { QueryRunner }        from 'typeorm'

export class AddProjectPublicationDate1571587437364 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('ALTER TABLE "project" ADD "publicationDate" TIMESTAMP', undefined)
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('ALTER TABLE "project" DROP COLUMN "publicationDate"', undefined)
  }
}
