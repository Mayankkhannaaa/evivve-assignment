const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Task = sequelize.define(
  'task',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('pending', 'completed', 'in_progress'),
      allowNull: false,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'user_id',
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
  }
);

module.exports = Task;
