//Create Item Table Structure
module.exports=  function(sequelize, DataTypes){
var Model = sequelize.define(
    "category",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Parentcategory: DataTypes.STRING,
      Categoryname: DataTypes.STRING,
      Description: DataTypes.STRING,
      Status: DataTypes.INTEGER,
    },
    {
      tableName: "categories",
      timestamps: false,
    });
    return Model;
};