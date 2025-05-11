/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/

const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"


/*
o firstName - not allow null/empty
o lastName - not allow null/empty
o email - not allow null/empty
o imageUrl - with a default value, allow null/empty
o gpa - decimal between 0.0 and 4.0, allow null/empty
*/
const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },


  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },


  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  },


  imageUrl: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: 'https://www.cnu.org/sites/default/files/styles/public_square_feature_image/public/BostonCollege1.jpg'
  },


  gpa: {
    type: Sequelize.DECIMAL(3,1),
    allowNull: true,
    validate: {
      min: 0.0,
      max: 4.0
    }
  }

});

// Export the student model
module.exports = Student;