import { MigrationInterface } from 'typeorm'
import { QueryRunner }        from 'typeorm'

export class AddCompanyName1568100277686 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('ALTER TABLE "specialist" ADD "interactionName" character varying')
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('ALTER TABLE "specialist" DROP COLUMN "interactionName"')
  }
}
