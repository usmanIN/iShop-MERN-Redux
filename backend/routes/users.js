const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;
const {decryptPassword} = require("../utilis/password");

router.post("/signup", async function(req,res){
    let result = {success:false,message:"Registration Failed"};

    bcrypt.hash(req.body.password,SALT_ROUNDS).then(function(converted){
        req.body.password = converted;
    }).then(function(){
         User.insertMany(req.body).then(function(response){
            console.log(response);
         }).then(function(){
            result = {success:true,message:"Registration Success"};
            res.json(result);
         });
         
    }).catch(function(error){
        console.log(error);
        res.json(result);
    });  
    
});

router.post("/signin", async function(req,res){

    
    User.findOne({email:req.body.email},function(error,result){
        if(error)   res.json({success:false,message:"Error! Try Again"});

         const compare = await decryptPassword(req.body.password, result.password);

         if(compare){
            return res.json({success:true,message:"Login Successfully"});
         }else{
            return res.json({success:true,message:"Login Failed"});
         }

        // const hash_password = result.password;
        
        // bcrypt.compare(req.body.password, hash_password, function(err,result){
        //     if(err) res.json({success:false,message:"Password Incorrect"}); 
        //     res.json({success:true,message:"Login Successfully"});
        // });

    });

    

    
});

module.exports = router;