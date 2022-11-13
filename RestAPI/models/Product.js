const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:[true,"Please enter product title"],
            unqiue:true,
        },
        image:{
            type:String,
            // required:[true,"Please upload product image"],
        },
        description:{
            type:String,
            required:true,
        },
        category:{
            type:String,
            required:true,
        },
        price:{
            type:Number,
            min:1,
        },
        quantity:{
            type:Number,
            min:1,
        },
        rating:{
            type:Number,
            default:0,
        },
        created_at:{
            type:Date,
            default:Date.now()
        }
    }
)


const Product = mongoose.model("products",productSchema);

module.exports = Product