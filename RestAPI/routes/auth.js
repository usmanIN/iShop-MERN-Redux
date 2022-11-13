
const router = require("express").Router();
const User = require("../models/User");
const crypto = require("crypto-js");
const jwt = require("jsonwebtoken");

router.post("/signup",async function(req,res){
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: crypto.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
    });
    try{
        const saved = await newUser.save();
        res.status(201).json(saved);
    }catch(error){
        res.status(500).json(error);
    }
      
});

router.post("/signin",async function(req, res){
   try{
    const user =  await User.findOne({email:req.body.email});
    
    !user && res.status(401).json("Wrong! Credentials Email");
    
    const hashPasswd =  (crypto.AES.decrypt(user.password,process.env.SECRET_KEY)).toString(crypto.enc.Utf8);
    
    hashPasswd!== req.body.password && res.status(401).json("Wrong! Password");

    const token = jwt.sign({
        id:user._id,    
    }, process.env.JWT_TOKEN, {expiresIn:"3d"});


    
    const {password, ...others} = user._doc;
    
    res.status(200).json({...others, token});
    
   }catch(error){
     res.status(500).json(error);
   }

});



module.exports = router;