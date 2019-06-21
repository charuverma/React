  //Create Item Table Structure
  module.exports=  function(sequelize, DataTypes){
    var Model = sequelize.define(
        "role",
        {
    id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
  
      name: DataTypes.STRING,
      Status:DataTypes.STRING
  }, {
    tableName: 'roles',
    timestamps: false,
  }
  );
  return Model;
};