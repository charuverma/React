//Including dependency
var Sequelize = require("sequelize");


//Setting up the config
var sequelize = new Sequelize('product', 'root', 'miami@123', {
    host: "203.100.77.138",
    port: 3306,
    dialect: 'mysql'
});

//Checking connection status
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

//Create Item Table Structure
 var materials = sequelize.define('materials', {
  id: {
    type:Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
},
    ProductName:Sequelize.STRING,
    ProductType: Sequelize.STRING,
    Country: Sequelize.STRING,
    Price: Sequelize.INTEGER,
    ManufacturingDate: Sequelize.STRING,
    ExpireyDate: Sequelize.STRING,
    Size :Sequelize.STRING,
    File:Sequelize.STRING
}, {
  tableName: 'material',
  timestamps: false,
 
});

exports.save = (function(req)  {
  if(req.body.id) {
    return materials.update({
      ProductName: req.body.ProductName,
      ProductType:req.body.ProductType,
      Country:req.body.Country,
      Price:req.body.Price,
      ManufacturingDate:req.body.ManufacturingDate,
      ExpireyDate:req.body.ExpireyDate,
      Size:req.body.Size,
      File:req.body.File
    }, {
      where: {
        id: req.body.id
      }
    });
  } else {
    return materials.create({
      ProductName: req.body.ProductName,
      ProductType:req.body.ProductType,
      Country:req.body.Country,
      Price:req.body.Price,
      ManufacturingDate:req.body.ManufacturingDate,
      ExpireyDate:req.body.ExpireyDate,
      Size:req.body.Size,
      File:req.body.File
    });
  };
});
 
 
 exports.list = (function(req)  {
  return materials.findAll({
  });
});

exports.delete=(function(req)
{
  return materials.destroy({
    where:{
      id:req.body.id
    }
  });
});
 exports.get =(function(req){
  return materials.findOne({
    where :{
      id:req.body.id
    }
  });
}); 