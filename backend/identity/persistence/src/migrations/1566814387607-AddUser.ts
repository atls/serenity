import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddUser1566814387607 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" uuid NOT NULL, "version" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "emailAddress" character varying NOT NULL, "emailVerified" boolean NOT NULL, "emailVerificationtoken" character varying, "credentialsPassword" character varying NOT NULL, "credentialsResettoken" character varying, CONSTRAINT "UQ_eea9ba2f6e1bb8cb89c4e672f62" UNIQUE ("emailAddress"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "user"`)
  }
}
