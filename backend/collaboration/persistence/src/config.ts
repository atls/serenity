import { ConnectionOptions } from 'typeorm'

import migrations            from './migrations'
import {
  Chat,
  Customer,
  Discussion,
  Message,
  Project,
  ProjectId,
  Reply,
  Review,
  Specialist,
} from './entities'

const config: ConnectionOptions = {
  type: 'postgres',
  uuidExtension: 'pgcrypto',
  host: process.env.DB_HOST || 'db',
  database: process.env.DB_NAME || 'db',
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  entities: [Specialist, Customer, Project, Message, Discussion, Reply, Review, Chat, ProjectId],
  migrations,
  migrationsRun: true,
  synchronize: false,
  logging: Boolean((process.env as any).DB_LOGGING) || false,
  cli: {
    migrationsDir: 'src/migrations',
  },
}

export default config
