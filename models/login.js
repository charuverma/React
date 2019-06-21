
//Create Item Table Structure
module.exports=  function(sequelize, DataTypes){
    var Model = sequelize.define(
        "Register",
        {
    id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
  
      emailid: DataTypes.STRING,
      password:DataTypes.STRING
  }, {
    tableName: 'Register',
    timestamps: false,
  }
  );
  return Model;
};