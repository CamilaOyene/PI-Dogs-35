const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey:true,
      defaultValue: DataTypes.UUIDV4,
    },
    name:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    image:{
      type:DataTypes.TEXT,
      allowNull:false
    },
    heightMin: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    heightMax: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weightMin: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weightMax: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    life_span: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    createDb: {
      type: DataTypes.BOOLEAN ,
      defaultValue: true,
    }
  },{timestamps:false});
};



