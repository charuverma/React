const models = require('../models');

exports.save = function(req) {
    if(req.body.id){
      return models.category.update({ 
        Parentcategory: req.body.Parentcategory, 
        Categoryname: req.body.Categoryname,
        Description: req.body.Description,
        Status: req.body.Status},{
        where:{
          id:req.body.id
        }
        });
    } 
     else{ 
    return models.category.create({
     Parentcategory: req.body.Parentcategory, 
    Categoryname: req.body.Categoryname,
    Description: req.body.Description,
    Status: req.body.Status,
    });
 } 
};

exports.list = function(req)  {
    return models.category.findAll({
       attributes: [
        'id',
        'Categoryname',
        'Status',
        [
          models.sequelize.literal('(Select Categoryname from categories where id=category.Parentcategory)'),
          'Parent'
        ]
      ],
      logging:true,
    });
  };
 
exports.delete= (function(req)
{
  return models.category.destroy({
    where:{
      id:req.body.id
    }
  });
});
exports.get = (function(req){
  return models.category.findOne({
    where :{
      id:req.body.id
    }
  });
});
exports.list1 = (function(req) {
  let pageLimit = req.app.locals.site.pageLimit;
	req = req.body;
	let	page = req.page || 1,
	limit = req.limit || pageLimit;

	return models.category.findAndCountAll({
    attributes: [
      'id',
      'Categoryname',
      'Status',
      [
        models.sequelize.literal('(Select Categoryname from categories where id=category.Parentcategory)'),
        'Parent'
      ]
    ],
    logging:true,
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
