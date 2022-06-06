import * as migrations          from './migrations'
import * as entities            from './entities'

import { TypeOrmModuleOptions } from '@nestjs/typeorm'

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  uuidExtension: 'pgcrypto',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'db',
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  migrations: Object.values(migrations),
  entities: Object.values(entities),
  migrationsRun: true,
}

export default config
