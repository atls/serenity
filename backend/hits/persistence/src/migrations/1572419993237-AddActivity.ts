import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddActivity1572419993237 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "activity" ("id" character varying NOT NULL, "last" TIMESTAMP NOT NULL, CONSTRAINT "PK_24625a1d6b1b089c8ae206fe467" PRIMARY KEY ("id"))`,
      undefined
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "activity"`, undefined)
  }
}
