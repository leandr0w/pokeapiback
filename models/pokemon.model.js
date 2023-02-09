const { DataTypes } = require("sequelize");
const { db } = require("../database/db");

const Pokemon = db.define('Pokemon', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    }
})
module.exports = Pokemon;