// models/User.js

const { v4: uuidv4 } = require('uuid');
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database'); // Configure your database connection
// Import the UUID generator

const User = sequelize.define('users', {
  id: {
    type: DataTypes.UUID,
    defaultValue: () => uuidv4(), // Use the UUID generator to set a default value
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Add other columns as needed
});

// Custom method to check if an email is taken
User.isEmailTaken = async function (email) {
  const user = await User.findOne({ where: { email } });
  return !!user; // Returns true if the email is taken, false otherwise
};

module.exports = User;
