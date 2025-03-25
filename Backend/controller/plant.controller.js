import plantModel from "../models/plant.model.js";

const plantRegister = async (req,res) =>{
    const {name} = req.body;
    if(!name){
        return res.status(400).json({message : "plant name is required"});
    }
    try{
        const plant = await plantModel.create
        ({
            name : name
        });
        return res.status(201).json({message : "plant created succesfully" , plant : plant});
    }
    catch(error){
        console.log(error);
        return res.status(500).json({message : "internal server error"}); 
    }
}

export {plantRegister};