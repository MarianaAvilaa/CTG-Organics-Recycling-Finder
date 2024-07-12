'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class MicroHauler extends Model {
    static associate(models) {
      // Define associations here
      this.belongsTo(models.County,{foreignKey:'countyId'})
    }
  }

  MicroHauler.init({
    id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey:true,
      type: DataTypes.INTEGER,
      
    },
    countyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model: "counties",
        key: 'id'
      }
    },
    //start of daraus code
    countyName:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    stateName:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    //end
    name: {
        type:  DataTypes.STRING,
       },
    address:{
      type:DataTypes.STRING,
      allowNull: true
    },
    website:{
        type: DataTypes.STRING,
        allowNull: true
    },
    email:{
        type: DataTypes.STRING,
        allowNull: true
    },
    phoneNum:{
        type: DataTypes.STRING,
        allowNull: true
    },
    longitude:{
        type: DataTypes.FLOAT,
        
    },
    latitude:{
        type: DataTypes.FLOAT,
        
    }
   
  }, {
    sequelize,
    tableName: 'microHaulers',
    modelName: 'MicroHauler',
    timestamps:false
  });

  return MicroHauler;
};
