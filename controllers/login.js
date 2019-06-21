//Including dependency
const models=require('../models');
const bcrypt = require('bcrypt');
exports.save = function(req) {
  return models.Register.create({
    emailid: req.body.emailid,
    password: req.body.password
  });
};
 
  exports.login =function(req){
    return models.Register.findOne({
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
    });
  } ;