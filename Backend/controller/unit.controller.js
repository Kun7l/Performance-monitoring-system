import unitModel from "../models/unit.model.js";

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

export {unitRegister , fetchAllUnits};