import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
export const Country = sequelize.define('countries', {
    id_country: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    country_name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    continent_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'continents',
        key: 'id_continent'
      }
    }
  }, {
    sequelize,
    tableName: 'countries',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "countries_pkey",
        unique: true,
        fields: [
          { name: "id_country" },
        ]
      },
    ]
  });
