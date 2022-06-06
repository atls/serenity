/* eslint-disable @typescript-eslint/no-empty-function */

import { MigrationInterface } from 'typeorm'
import { QueryRunner }        from 'typeorm'

export class DropUser1566814193072 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE IF EXISTS "user"`)
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
