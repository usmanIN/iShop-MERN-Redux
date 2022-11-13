const router =  require("express").Router();
const {tokenVerfiy} = require("../utilis/token");
const crypto = require("crypto-js");
const User = require("../models/User");

router.put("/:id",tokenVerfiy, async function(req, res){
    if(req.user.id === req.params.id){
        
        if(req.body.password){
            req.body.password = crypto.AES.encrypt(req.body.password,process.env.SECRET_KEY).toString();
        }

        try{
            const updateUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            },{new:true});

            res.status(200).json(updateUser);
        }catch(error){
            res.status(500).json(error);
        }
    }else{
        res.status(403).json("you are not allowed to do that");
    }
})

router.delete("/:id",tokenVerfiy, async function(req, res){
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted");
    }catch(error){
        res.status(500).json(error);
    }
});

router.get("/find/:id", tokenVerfiy, async function(req, res){
    try{
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;
        res.status(200).json(others);
    }catch(error){
        res.status(500).json(error);
    }
});

router.get("/",tokenVerfiy, async function(req, res){
    try{
        const users = await User.find();        
        res.status(200).json(users);
    }catch(err){
        res.status(500).json(err);
    }
})

router.get("/stats", tokenVerfiy, async function(req,res){
    const date = new Date();
    const last_year = new Date(date.setFullYear(date.getFullYear() -1));

    try{
        const data = await User.aggregate([
            {$match: {created_on: {$gte: last_year}}},
            {
                $project: {
                    month: { $month: "$created_on"},
                },
            },
            {
                $group:{
                    _id:"$month",
                    total:{ $sum:1},
                }
            }
        ]);
        res.status(200).json(data);

    }catch (err){
        res.status(500).json(err);
    }
})

module.exports = router;