'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SmartBin extends Model {
    static associate(models) {
      // Define associations here
      this.belongsTo(models.County,{foreignKey:'countyId'})
    }
  }

  SmartBin.init({
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
    timeOpen:{
        type: DataTypes.STRING,
        allowNull: true
    },
    monthOpen:{
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
    tableName: 'smartBins',
    modelName: 'SmartBin',
    timestamps:false
  });

  return SmartBin;
};