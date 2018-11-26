module.exports = function(sequelize, DataTypes) {
     
     // defines user value from log-in
     
     var user = sequelize.define("user", {
          userName: DataTypes.STRING,
          email: DataTypes.STRING
     }, {
          freezeTableName: true,
          tableName: 'user'
     });

     //associates username with corresponding lists/tables as they are created

     user.associate = function(models) {

          user.hasMany(models.giftsList, {
               onDelete: "cascade"
          });

     //      userName.hasMany(models.wishList, {
     //           onDelete: "casdade"
     //      });

     //      userName.hasMany(models.cardsList, {
     //           onDelete: "cascade"
     //      });

     //      userName.hasMany(models.recipesList, {
     //           onDelete: "cascade"
     //      });

     //      userName.hasMany(models.groceryList, {
     //           onDelete: "cascade"
     //      });

     //      userName.hasMany(models.eventList), {
     //           onDelete: "cascade"
     //      }
     };
     
     return user;
}