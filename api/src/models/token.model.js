const { DataTypes } = require('sequelize');
const { tokenTypes } = require('../config/tokens');
const sequelize = require('../../config/database');

const Token = sequelize.define(
  'token',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id',
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [[tokenTypes.REFRESH, tokenTypes.RESET_PASSWORD, tokenTypes.VERIFY_EMAIL]],
      },
    },
    expires: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    blacklisted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at', // Specify the actual column name in the database
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at', // Specify the actual column name in the database
    },
  },
  {
    timestamps: true,
    tableName: 'token',
  }
);

module.exports = Token;
