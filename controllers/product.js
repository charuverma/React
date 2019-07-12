const models = require('../models');
exports.save = (function(req) {
  console.log(req);
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
exports.list1 = (function(req) {
  let pageLimit = req.app.locals.site.pageLimit;
	req = req.body;
	let	page = req.page || 1,
	limit = req.limit || pageLimit;

	return models.product.findAndCountAll({
		limit: limit,
		offset: (page - 1) * limit,
	}).then(data => {
		return {
			status: true,
			data: data.rows,
			totalData: data.count,
			pageCount: Math.ceil(data.count / limit),
			pageLimit: limit,
			currentPage: parseInt(page)
		};
	});
});