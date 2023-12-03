// config/database.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('evivve', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false, // Disable timestamps (createdAt, updatedAt)
  },
});

module.exports = sequelize;
