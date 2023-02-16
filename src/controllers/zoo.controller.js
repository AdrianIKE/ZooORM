import { Zoo } from "../models/Zoo.js";
import {Op} from "sequelize";

export const getAllZoo = async (req,res) =>{
    let response;
    try{    
        response = await Zoo.findAll();

    }catch(e){
        res.status(500).json({"Error": e.message});
    }
    
    res.status(200).json(response);
};

export const getOneZoo = async (req,res)  =>{

    const {id} = req.params;
    let response;
    try{
        response = await Zoo.findByPk(id);
        /*response = await Zoo.findAll({
            where:{id_zoo:id}
        });*/
    }catch(e){
        res.status(500).json({
            "error": e.message
        })
        return;
    }

    if(response === null){
        res.status(404).json({
            "error":"Tu registro no se encuentra en la base"
        })
        return;
    }

    res.status(200).json(response);
};

export const getZooBudget = async (req,res) =>{
    let response;
    //SELECT zoo_name,budget FROM zoos ORDER BY budget DESC
    try{
        response = await Zoo.findAll({
            attributes:['zoo_name','budget'],
            //attributes:{exclude:['id_zoo','zoo_size','city_id']}
            order: [['budget','DESC']]
        });
    }catch(e){
        res.status(500).json({
            "error": e.message
        })
        return;
    }

    res.status(200).json(response);
}

export const getZooNombre = async (req,res) =>{
    const {nombre} = req.body;
    let response;
    let sentencia_like = "%"+nombre.toLowerCase()+"%"
    //SELECT * FROM zoos WHERE LOWER(zoo_name) LIKE $1
    try{
        response = await Zoo.findAll({
            where:{
                // iLike = insensitive case Lique
                'zoo_name': {[Op.iLike]:sentencia_like}
            }
        })
    }catch(e){
        res.status(500).json({
            "error": e.message
        })
        return;
    }

    if(response.length === 0){
        res.status(404).json({
            "error":"Tu registro no se encuentra en la base"
        })
        return;
    }

    res.status(200).json(response);
}

export const createZoo = async (req,res) =>{
    const {zoo_name,city_id,zoo_size,budget} = req.body;
    let response;
    try{
        response = await Zoo.create({
           zoo_name,
           city_id,
           zoo_size,
           budget
        });
        
    }catch(e){
        res.status(500).json({
            "error": e.message
        })
        return;
    }
    res.status(200).json({"Registro Exitoso": response.dataValues});
}

export const deleteZoo = async (req,res) =>{
    const{id_zoo} = req.params;
    let response;
    try {
        response = await Zoo.destroy({
            where:{id_zoo}
        });
        
    } catch (e) {
        res.status(500).json({
            "error": e.message
        })
        return;
    }
    res.status(200).json({"Estado Transaccion": response})
}
