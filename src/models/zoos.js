import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
export const Zoo =  sequelize.define('zoos', {
    id_zoo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    zoo_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    city_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cities',
        key: 'id_city'
      }
    },
    zoo_size: {
      type: DataTypes.REAL,
      allowNull: false
    },
    budget: {
      type: DataTypes.REAL,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'zoos',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "zoos_pkey",
        unique: true,
        fields: [
          { name: "id_zoo" },
        ]
      },
    ]
  });
