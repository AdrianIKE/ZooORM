import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Animal } from "./animals.js";
export const Continent =  sequelize.define('continents', {
    id_continent: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    continent_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'continents',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "continents_pkey",
        unique: true,
        fields: [
          { name: "id_continent" },
        ]
      },
    ]
  });

