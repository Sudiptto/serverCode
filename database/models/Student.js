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
    defaultValue: 'https://i.pinimg.com/736x/4b/90/5b/4b905b1342b5635310923fd10319c265.jpg'
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