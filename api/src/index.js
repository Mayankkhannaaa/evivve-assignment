const mysql = require('mysql2');
const config = require('./config/config');
const logger = require('./config/logger');
const app = require('./app');
const sequelize = require('../config/database');

let server;

sequelize
  .sync()
  .then(() => {
    console.log('Database synced');
    server = app.listen(config.port, () => {
      logger.info(`Listening to port ${config.port}`);
    });
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);
