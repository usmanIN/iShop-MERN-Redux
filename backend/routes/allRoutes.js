const router= require("express").Router();

router.use("/product", require("./products"));
router.use("/user",require("./users"));
router.use("/order",require("./orders"));


router.get("*",function(req,res){
    res.send({
        response:false,
    })
});


module.exports = router;