import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
//Object Relational Mapping 
export const Zoo = sequelize.define('zoos',{
    id_zoo:{
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    zoo_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    city_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    zoo_size:{
        type: DataTypes.REAL,
        allowNull: false 
    },
    budget: {
        type: DataTypes.REAL,
        allowNull: false 
    }
},{
    sequelize,
    tableName: 'zoos',
    schema: 'public',
    timestamps: false
})