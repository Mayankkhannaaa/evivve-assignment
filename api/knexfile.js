// knexfile.js
module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'evivve',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations',
    },
  },
};
