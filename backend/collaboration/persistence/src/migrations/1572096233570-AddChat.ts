import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddChat1572096233570 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      'CREATE TABLE "chat" ("id" uuid NOT NULL, "version" integer NOT NULL DEFAULT 0, "customerId" character varying NOT NULL, "specialistId" character varying NOT NULL, "discussionId" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9d0b2ba74336710fd31154738a5" PRIMARY KEY ("id"))',
      undefined
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_c4a38c3ae146ecc147b34cdd58" ON "chat" ("customerId", "specialistId") ',
      undefined
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('DROP INDEX "IDX_c4a38c3ae146ecc147b34cdd58"', undefined)
    await queryRunner.query('DROP TABLE "chat"', undefined)
  }
}
