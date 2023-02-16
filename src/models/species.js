import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
export const Specie  = sequelize.define('species', {
    id_specie: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vulgar_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    scientific_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    specie_family: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    indanger: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'species',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "species_pkey",
        unique: true,
        fields: [
          { name: "id_specie" },
        ]
      },
    ]
  });
