const models = require('../models');
exports.save = (function(req) {
  if(req.body.id){
    return models.product.update(
      req.body,{
      where:{
        id:req.body.id
      }
      });
  } 
   else{ 
  return models.product.create(req.body);
} 
});
exports.list = (function(req){
  return models.product.findAll({
});
});
exports.delete= (function(req)
{
  return models.product.destroy({
    where:{
      id:req.body.id
    }
  });
});
exports.get = (function(req){
  return models.product.findOne({
    where:{
      id:req.body.id
    }
});
});