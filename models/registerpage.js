//Create Item Table Structure
var bcrypt = require('bcrypt');
module.exports=  function(sequelize, DataTypes){
    var Model = sequelize.define(
        "Register",
        {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: DataTypes.STRING,
      emailid: DataTypes.STRING,
      mobileno: DataTypes.INTEGER,
      password: DataTypes.STRING
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
  return Model;
};