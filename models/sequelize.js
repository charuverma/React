//Including dependency
var Sequelize = require("sequelize");


//Setting up the config
var sequelize = new Sequelize('Registerform', 'root', 'miami@123', {
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
 var personaldetails = sequelize.define('personaldetails', {
  id: {
    type:Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
},
    firstname:Sequelize.STRING,
    Lastname: Sequelize.STRING,
    emailid: Sequelize.STRING,
    BusinessProfile :Sequelize.STRING,
    CompanyName: Sequelize.STRING,
    JobTitle :Sequelize.STRING,
    street: Sequelize.STRING,
    city :Sequelize.STRING,
    State :Sequelize.STRING,
    zip: Sequelize.INTEGER,
    Country :Sequelize.STRING,
    MobileNo: Sequelize.INTEGER,
    Address :Sequelize.STRING
}, {
  tableName: 'personaldetail',
  timestamps: false,
 
});

exports.save = (function(req)  {
   if(req.body.id) {
    return personaldetails.update({
      firstname: req.body.firstname,
      Lastname:req.body.Lastname,
      emailid:req.body.emailid,
      BusinessProfile:req.body.BusinessProfile,
      CompanyName:req.body.CompanyName,
      JobTitle:req.body.JobTitle,
      street:req.body.street,
      city:req.body.city,
      State:req.body.State,
      zip:req.body.zip,
      Country:req.body.Country,
      MobileNo:req.body.MobileNo,
      Address:req.body.Address
    }, {
      where: {
        id: req.body.id
      }
    });
  } else { 
    return personaldetails.create({
      firstname: req.body.firstname,
      Lastname:req.body.Lastname,
      emailid:req.body.emailid,
      BusinessProfile:req.body.BusinessProfile,
      CompanyName:req.body.CompanyName,
      JobTitle:req.body.JobTitle,
      street:req.body.street,
      city:req.body.city,
      State:req.body.State,
      zip:req.body.zip,
      Country:req.body.Country,
      MobileNo:req.body.MobileNo,
      Address:req.body.Address
    })
  };
});  
 
exports.list = (function(req)  {
  return personaldetails.findAll({
  });
});

exports.delete=(function(req)
{
  return personaldetails.destroy({
    where:{
      id:req.body.id
    }
  });
});
exports.get =(function(req){
  return personaldetails.findOne({
    where :{
      id:req.body.id
    }
  });
});