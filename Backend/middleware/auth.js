import jwt from "jsonwebtoken";

const auth = async (req,res,next)=>{
    const token = req?.headers?.authorization?.split(" ")[1];
    // console.log(token);
    if(!token){
        return res.status(401).json({message : "user is not authorized"});
    }
    try{
        const payload = await jwt.verify(token , process.env.JWT_SECRET);
        if(!payload){
            return res.status(401).json({message : "user is not authorized"});
        }
        req.userId = payload.id;
        next();
    }
    catch(error){
        return res.status(401).json({message : "user is not authorized"});
    }
}


export default auth;