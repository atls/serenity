import { MigrationInterface } from 'typeorm'
import { QueryRunner }        from 'typeorm'

export class AddSenging1566134570391 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "sending" ("id" uuid NOT NULL, "email" character varying NOT NULL, "template" character varying NOT NULL, "payload" jsonb NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_ed666bd3ce16f8faf2732dad5c5" PRIMARY KEY ("id"))`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "sending"`)
  }
}
