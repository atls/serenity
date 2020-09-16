import { ConnectionOptions }       from 'typeorm'

import migrations                  from './migrations'
import { Category, CategoryGroup } from './entities'

const config: ConnectionOptions = {
  type: 'postgres',
  uuidExtension: 'pgcrypto',
  host: process.env.DB_HOST || 'db',
  database: process.env.DB_NAME || 'db',
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  entities: [CategoryGroup, Category],
  migrations,
  migrationsRun: true,
  synchronize: false,
  logging: false,
  cli: {
    migrationsDir: 'src/migrations',
  },
}

export default config
