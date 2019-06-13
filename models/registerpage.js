//Including dependency
var Sequelize = require("sequelize");
var bcrypt = require('bcrypt');

//Setting up the config
var sequelize = new Sequelize("Registerform", "root", "miami@123", {
  host: "203.100.77.138",
  port: 3306,
  dialect: "mysql"
});

//Checking connection status
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

//Create Item Table Structure
var Registers = sequelize.define(
  "Registers",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: Sequelize.STRING,
    emailid: Sequelize.STRING,
    mobileno: Sequelize.INTEGER,
    password: Sequelize.STRING
  },
  {
    tableName: "Register",
    timestamps: false,
    hooks: {
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
      }
    },
  }
);
exports.save = function(req) {
  if (req.body.id) {
    return Registers.update(
      {
        username: req.body.username
      },
      {
        where: {
          id: req.body.id
        }
      }
    );
  } else {
    return Registers.create({
      username: req.body.username,
      emailid: req.body.emailid,
      mobileno: req.body.mobileno,
      password: req.body.password
    });
  }
};
exports.get = function(req) {
  return Registers.findOne({
    where: {
      id: req.body.id
    }
  });
};
