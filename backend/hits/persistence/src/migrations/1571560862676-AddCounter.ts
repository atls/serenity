import { MigrationInterface } from 'typeorm'
import { QueryRunner }        from 'typeorm'

export class AddCounter1571560862676 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "counter" ("id" uuid NOT NULL, "version" integer NOT NULL DEFAULT 0, "resource" character varying NOT NULL, "count" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_6ef9a2c2ca1dfc9dad9accb08d6" UNIQUE ("resource"), CONSTRAINT "PK_012f437b30fcf5a172841392ef3" PRIMARY KEY ("id"))`,
      undefined
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "counter"`, undefined)
  }
}
