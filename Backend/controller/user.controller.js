import userModel from "../models/user.model.js";

const userRegister = async (req,res) =>{
    const {
        email,
        password,
        plantId,
        unitId,
    } = req.body;

    if(!email || !password || !plantId || !unitId){
       return res.status(400).json({message : "something is missing ."})
    }

    try{
        const isUserAlready = await userModel.findOne({email : email});
        if(isUserAlready){
            return res.status(400).json({message : "user already exist with same email"});
        }
        const hashedPassword = await userModel.hashPassword(password);
        const user = await userModel.create({
            email,
            password : hashedPassword,
            role : "plant operator",
            plantId : [plantId],
            unitId : [unitId],
        });
        return res.status(201).json({user , message : "plant operator account created successfully"});
      }
    
      catch(error){
        console.log(error);
        return res.status(500).json({message : "internal server error"});
      }  
}

const userLogin = async (req , res) =>{
    const {email , password} = req.body;
  
    if(!email || !password){
      return res.status(404).json({message : "email and password is required"});
    };
  
    try{
      const user = await userModel.findOne({email : email});
      if(!user){
          return res.status(401).json({message : "user with given email doesnt exist"});
      };
  
      const isPasswordCorrect = await user.verifyPassword(password);
      if(!isPasswordCorrect){
          return res.status(401).json({message : "password is incorrect"});
      };
  
      const token = user.generateToken();
      return res.status(200).json({message : "user login successfully" , user , token});
    }
    catch(error){
      return res.status(500).json({message : "internal server error"});
    }
};

const removePlantOperator = async (req , res) =>{
    const plantOperatorId = req.params.id;
    try{
       const res = await userModel.findByIdAndDelete(plantOperatorId);
       res.status(200).json({message : "plant-operator deleted successfully"});
    }
    catch(error){
      return res.status(500).json({message : "internal server error"});        
    }
};

export {userRegister , userLogin , removePlantOperator};