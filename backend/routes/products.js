const router = require("express").Router();
const Product =  require("../models/product");

router.get("/",async (req,res) =>{
    const product = await Product.find();    
    res.status(200).json({
        success:true,
        data:product
    })
});


router.get("/:id",async function(req,res){

    const product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product Not found"
        })
    }

    res.status(200).json({
        success:true,
        date:product
    });
})


// Create
router.post("/create", async function(req, res){
    
    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
    })
})

// Update

router.put("/:id",async function(req,res){
    
    let product = await Product.findById(req.params.id)
    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true, runValidators:true, useFindAndModify:false   
    })

    res.status(200).json({
        success:true
    })

});

// Delete

router.delete("/:id",async function(req, res){
    
    let product = await Product.findById(req.params.id)
    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }

    await product.remove();

    res.status(200).json({
        success:true,
        message:"Product Deleted"
    })

})

module.exports = router;