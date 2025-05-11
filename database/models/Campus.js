/*==================================================
/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

// Define the campus model
/* 
o name - not allow null/empty
o address - not allow null/empty
o description - large text string, allow null/empty
o imageUrl - with a default value, allow null/empty
*/
const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },


  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },


  description: {
    type: Sequelize.TEXT,
    allowNull: true
  },


  imageUrl: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "https://www.cnu.org/sites/default/files/styles/public_square_feature_image/public/BostonCollege1.jpg"
  }

});

// Export the campus model
module.exports = Campus;