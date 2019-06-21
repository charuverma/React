module.exports = function(sequelize,datatype){
    var Model=sequelize.define(
        "permission",{
            id:{
                type:datatype.INTEGER,
                autoIncrement:true,
                primaryKey:true
            },
            module:datatype.STRING,
            module_action:datatype.STRING,
            slug:datatype.STRING,
            name:datatype.STRING,
            order:datatype.INTEGER,
            order_module:datatype.INTEGER,
            Status:datatype.INTEGER

        },
        {
            tableName: 'permission',
    timestamps: false,
        }
    );
    return Model;
};