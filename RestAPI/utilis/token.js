const jwt = require("jsonwebtoken");

const tokenVerfiy = function(req, res, next){
    
    const authHeader  = req.headers.token;
    
    if(authHeader){
        const token = authHeader.split(" ")[1];
        jwt.verify(token,process.env.JWT_TOKEN,function(error,result){
            if(error)  res.status(403).json("Not Valid Token!");
            req.user = result;
            next();
        });
    }else{
        return res.status(401).json("You're not Authorized"); 
    }
}
module.exports = {tokenVerfiy};