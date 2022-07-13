const router = require("express").Router();
const User = require("../models/user");
// const { encryptPassword } = require("../utilis/password");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

router.post("/signup", function(req,res){
    let result = {success:false,message:"Registration Failed"};
    let output = {};
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

router.post("/signin",function(req,res){

});

module.exports = router;