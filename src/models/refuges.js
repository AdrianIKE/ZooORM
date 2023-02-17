import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Zoo } from "./zoos.js";
import {Specie} from "./species.js"
export const Refuge = sequelize.define('refuges', {
    id_refuge: {
      primaryKey: true,
      autoIncrement : true,
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
    timestamps: false,
    indexes: [
      {
        name: "pk_refuge",
        unique: true,
        fields: [
          { name: "id_refuge" },
        ]
      },
    ]
  });

Refuge.hasMany(Zoo,{
  foreignKey: "id_zoo",
  sourceKey: 'zoo_id'
})

Refuge.hasMany(Specie,{
  foreignKey: "id_specie",
  sourceKey: "specie_id"
})

