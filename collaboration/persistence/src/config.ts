import { ConnectionOptions } from 'typeorm'

import migrations            from './migrations'
import { Chat }              from './entities'
import { Customer }          from './entities'
import { Discussion }        from './entities'
import { Message }           from './entities'
import { Project }           from './entities'
import { ProjectId }         from './entities'
import { Reply }             from './entities'
import { Review }            from './entities'
import { Specialist }        from './entities'

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
