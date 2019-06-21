
//Create Item Table Structure
module.exports=  function(sequelize, DataTypes){
    var Model = sequelize.define(
        "product",
        {
    id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
  
      name:DataTypes.STRING,
      File:DataTypes.STRING,
      weight:DataTypes.STRING,
      rate:DataTypes.NUMBER,
      HSNnumber:DataTypes.NUMBER,
      other:DataTypes.STRING
  }, {
    tableName: 'product',
    timestamps: false,
  }
  );
  return Model;
};