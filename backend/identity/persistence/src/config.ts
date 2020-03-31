import { ConnectionOptions } from 'typeorm'

import migrations            from './migrations'
import { User }              from './entities'

const config: ConnectionOptions = {
  type: 'postgres',
  uuidExtension: 'pgcrypto',
  host: process.env.DB_HOST || 'db',
  database: process.env.DB_NAME || 'db',
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  port: Number(process.env.DB_PORT) || 5432,
  entities: [User],
  migrations,
  migrationsRun: true,
  synchronize: true,
  logging: false,
  cli: {
    migrationsDir: 'src/migrations',
  },
}

export default config
