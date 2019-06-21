const models=require('../models');
models.role.hasMany(models.rolepermission);
models.rolepermission.belongsTo(models.permission);

exports.save = function(req) {
  req=req.body;
  return (
		req.id ?
			models.role.update(req, {
				where: {
					id: req.id
				}
			})
			:
			models.role.create(req)
  ) .then(data => {
			if(req.permissionIds.length)
				return createPermission(req, (req.id || data.id));
			else
				return {status: true, data};
		})
 	.catch(err => {
			if(err.errors)
				return {
					status: false,
					errors: models.makeErrors(err.errors)
				};
			else
				throw err;
		}); 
};

function createPermission(req, roleId) {

	let permissionIds = [],
		permissionData = [];

	if (typeof req.permissionIds !=='undefined') {
		permissionIds = req.permissionIds;
	}

	if(permissionIds.indexOf('1') === -1) permissionIds.push('1');

	for (var i = 0; i < permissionIds.length; i++) {
		permissionData.push({
			roleId,
			permissionId: permissionIds[i]
		});
  }
 	 return models.rolepermission.destroy({
		where:{
			roleId:roleId,
			permissionId: {[models.Sequelize.Op.notIn]: permissionIds},
    }
	}).then(() => {  
		return models.rolepermission.bulkCreate(permissionData, {
			ignoreDuplicates:true
		}).then(() => ({
			status: true,
			message: req.id 
		}));
	  }); 
}
  exports.list=function(req){
    return models.role.findAll({
    });
  };
  exports.delete=function(req){
    return models.role.destroy({
      where:{
        id:req.body.id
      }
    });
  };
/*   exports.get = function(req) {
    return models.role.findAll({
      where: {
        id: req.body.id
      }
    });
  }; */
  exports.get = req => {
    req=req.body;
    return Promise.all([
      models.role.findOne({
        include: [
          {
            model:models.rolepermission
          }
        ],
        where: {
          id: req.id
        }
      }),
      exports.permissions(req)
    ]).then(([data, {permissions}]) => {
      return {
        status: true,
        data,
        permissions
      };
    });
  };
  
exports.permissions=function(req){
  return models.permission.findAll(
  );
};