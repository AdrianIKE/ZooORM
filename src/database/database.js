import  Sequelize  from "sequelize";

export const sequelize  = new Sequelize(
    "railway",//Nombre de la base
    "postgres",//Nombre de usuario
    "lugI0CoRww4WsyozJVAL",//password
    {
        host:"containers-us-west-181.railway.app", //Servidor
        port:"5593", //Puerto
        dialect: "postgres" //dialecto
    }
);
