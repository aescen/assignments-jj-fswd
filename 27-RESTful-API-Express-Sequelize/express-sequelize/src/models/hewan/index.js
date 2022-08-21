const { DataTypes } = require('sequelize');
const sequelize = require('../../config/dbConnection');

const HewanModel = sequelize.define(
  'hewan',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    namaSpesies: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    umur: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    underscored: true,
  },
);

module.exports = HewanModel;
