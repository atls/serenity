import 'reflect-metadata'

import { DataSource }  from 'typeorm'

import * as entities   from './entities/index.js'
import * as migrations from './migrations/index.js'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  database: process.env.DB_NAME || 'db',
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  migrations: Object.values(migrations),
  entities: Object.values(entities),
  synchronize: false,
})
