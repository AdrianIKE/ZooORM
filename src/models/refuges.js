import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
export const Refuge = sequelize.define('refuges', {
    id_refuge: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    specie_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'species',
        key: 'id_specie'
      }
    },
    zoo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'zoos',
        key: 'id_zoo'
      }
    }
  }, {
    sequelize,
    tableName: 'refuges',
    schema: 'public',
    timestamps: false
  });

