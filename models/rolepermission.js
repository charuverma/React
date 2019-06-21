module.exports= function(sequelize,datatypes){
    var Model=sequelize.define(
        "rolepermission",{
            roleId:
            {
                type: datatypes.INTEGER,
                primaryKey: true,
            },
            permissionId: 
            {
                type: datatypes.INTEGER,
                primaryKey: true,
            }
        },
        {
            tableName:"role_permissions",
            timestamps:false,
        }
    );
    return Model;
}