//Including dependency
var Sequelize = require("sequelize");
const bcrypt = require('bcrypt');


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
 var Registers = sequelize.define('Registers', {
  id: {
    type:Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
},

    emailid: Sequelize.STRING,
    password:Sequelize.STRING
}, {
  tableName: 'Register',
  timestamps: false,
}
);

exports.save = function(req) {
  console.log("create Data Api");
  return Registers.create({
    emailid: req.body.emailid,
    password: req.body.password
  });
};
 
  exports.login =function(req){
    console.log(req.body);
    return Registers.findOne({
    where :{
        emailid:req.body.emailid
  
      }
    }).then(result => {
      if(result){
        if(bcrypt.compareSync(req.body.password, result.password)) {
          return {status:true};
         } else {
          return {status:false};
         }
  
      } else {
        return {status:false};
      }
    })
  } 