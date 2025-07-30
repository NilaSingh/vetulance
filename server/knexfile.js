// Update with your config settings.
require('dotenv').config()

module.exports = {

  development: {
    client: 'pg',
    connection: {
      port: process.env.PORT,
      database: process.env.DATABASE,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD
    },
  },
  staging: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
//     {
//       database: process.env.database,
//       user: process.env.databaseUsername,
//       password: process.env.databasePassword
//     },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
//     {
//       database: process.env.database,
//       user: process.env.databaseUsername,
//       password: process.env.DatabasePassword
//     },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};