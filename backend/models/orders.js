const mongoose =  require("mongoose");


const orderSchema = new mongoose.Schema(
    {
        product: {
            type:String,
            required:true,
        },
        cost:{
            type:Number,
            required:true,
        },
        quantity:{
            type:Number,
            required:true,
        },
        address:{
            type:String,
            required:true,
        },
        created_on:{
            type:Date,
            default:Date.now()
        },
        status:{
            String:String,
            default:"Processing"
        }
    }
)




const Order = mongoose.model("orders",orderSchema);

module.exports =  Order