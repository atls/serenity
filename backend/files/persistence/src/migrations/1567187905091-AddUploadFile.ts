import { MigrationInterface } from 'typeorm'
import { QueryRunner }        from 'typeorm'

export class AddUploadFile1567187905091 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "upload" ("id" uuid NOT NULL, "version" integer NOT NULL DEFAULT 0, "type" character varying NOT NULL, "name" character varying NOT NULL, "url" character varying NOT NULL, "fields" jsonb NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_1fe8db121b3de4ddfa677fc51f3" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "file" ("id" uuid NOT NULL, "version" integer NOT NULL DEFAULT 0, "type" character varying NOT NULL, "name" character varying NOT NULL, "url" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_36b46d232307066b3a2c9ea3a1d" PRIMARY KEY ("id"))`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "file"`)
    await queryRunner.query(`DROP TABLE "upload"`)
  }
}
