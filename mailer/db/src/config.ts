import { DataSourceOptions } from 'typeorm'
import migrations from './migrations'
import { Sending } from './entities'

const config: DataSourceOptions = {
  type: 'postgres',
  uuidExtension: 'pgcrypto',
  host: process.env.DB_HOST || 'db',
  database: process.env.DB_NAME || 'db',
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  entities: [Sending],
  migrations,
  migrationsRun: true,
  synchronize: false,
  logging: false,
}

export default config
