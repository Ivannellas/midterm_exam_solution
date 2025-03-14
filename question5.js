const { Sequelize, DataTypes } = require('sequelize');

// Create a new Sequelize instance and connect to MySQL
const sequelize = new Sequelize('mysql://user:password@localhost:3306/database_name');

// Define the User model
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
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
  status: {
    type: DataTypes.STRING,
    defaultValue: 'active',
  },
});

// Sync the model with the database
sequelize.sync().then(() => {
  console.log('User model synced with database');
});

module.exports = User;


const express = require('express');
const app = express();
const User = require('./models/user'); // Import the User model

app.get('/users', async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving users.");
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
