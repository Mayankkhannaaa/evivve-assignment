// models/User.js

const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const User = sequelize.define('users', {
  id: {
    type: DataTypes.UUID,
    defaultValue: () => uuidv4(),
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

User.beforeCreate(async (user) => {
  const hashedPassword = await bcrypt.hash(user.password, 10);
  user.password = hashedPassword;
});

// Custom method to check if a provided password matches the hashed password in the database
User.prototype.isPasswordMatch = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Custom method to check if an email is taken
User.isEmailTaken = async function (email) {
  const user = await User.findOne({ where: { email } });
  return !!user; // Returns true if the email is taken, false otherwise
};

module.exports = User;
