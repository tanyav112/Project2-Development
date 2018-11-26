module.exports = function (sequelize, DataTypes) {
     
     // defines grocery list values within table
     
     var groceryList = sequelize.define("groceryList", {
          groceryName: DataTypes.STRING,
          groceryQuantity: DataTypes.STRING,
          complete: DataTypes.BOOLEAN,
     }, {
               freezeTableName: true,
               tableName: 'groceryList'
          });

     return groceryList;
};