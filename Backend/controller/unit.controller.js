import unitModel from "../models/unit.model.js";
import userModel from "../models/user.model.js";

const unitRegister = async (req , res) =>{
    const {name , plantId} = req.body;
    if(!name || !plantId){
        return res.status(400).json({message : "Unit name or plantId is required"});
    }
    try{
        const unit = await unitModel.create
        ({
            name : name,
            plantId : plantId,
        });
        return res.status(201).json({message : "unit created succesfully" , unit : unit});
    }
    catch(error){
        console.log(error);
        return res.status(500).json({message : "internal server error"}); 
    }
};

const fetchAllUnits = async (req,res) =>{
    try{
        const units = await unitModel.find({});
        return res.status(200).json({message : "units fetched successfully" , units : units}); 
    }
    catch(error){
        console.log(error);
        return res.status(500).json({message : "internal server error"});
    }
}

const getUnitsByPlantId = async (req , res) =>{
    try{
        const plantId = req.params.id;
        if(!plantId){
            return res.status(400).json({message : "plant id is required"});
        }
        const units = await unitModel.find({plantId : plantId});
        return res.status(200).json({message :"units fetched successfully" , units : units});
    }

    catch(error){
        return res.status(500).json({message : "internal server error"}); 
    }
}

const getAllUnitsByUserId = async (req,res) =>{
    try{
        const userId = req.userId;
        const user =  await userModel.findById(userId).populate('unitId');
        // console.log(user);
        return res.status(200).json({message : "units associated with current user found out" , units : user.unitId});
        
    }
    catch(error){
        console.log(error);
        return res.status(500).json({message : "internal server error"});
    }
}

export {unitRegister , fetchAllUnits , getUnitsByPlantId , getAllUnitsByUserId};