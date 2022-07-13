const jwt = require("jsonwebtoken");
const User =  require("../models/user");


const SECERT_KEY = process.env.JWT_SECRET || "aef35004d231b770549f8cc0f1848db1";

exports.tokenGenerator = (data) =>{
    return jwt.sign(data,SECERT_KEY, {expiresIn:'15d'});
}

exports.tokerAuthorization = (req,res,next) => {
    const authorization  = req.headers.authorization;
    
    if(!authorization){
        return res.status(404).send({
            message:"No token"
        })
    } 
    const token =  authorization && authorization.split(" ")[1];
    const  record = jwt.verify(token,SECERT_KEY);
    req.user =  await User.findById(record.id);

    next();
}