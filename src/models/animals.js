import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Continent } from "./continents.js";
export const Animal = sequelize.define('animals', {
    id_animal: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sex: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    birthyear: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    continent_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'continents',
        key: 'id_continent'
      }
    },
    specie_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'species',
        key: 'id_specie'
      }
    }
  }, {
    sequelize,
    tableName: 'animals',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "animals_pkey",
        unique: true,
        fields: [
          { name: "id_animal" },
        ]
      },
    ]
  });
