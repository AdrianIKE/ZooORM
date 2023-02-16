import  Sequelize  from "sequelize";

export const sequelize  = new Sequelize(
    "zoo_sql",//Nombre de la base
    "postgres",//Nombre de usuario
    "1234",//password
    {
        host:"localhost", //Servidor
        port:"5432", //Puerto
        dialect: "postgres" //dialecto
    }
);
