const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username:{ 
            type: String, 
            required:true
        },
        email:{ 
            type: String, 
            required:true
        },
        password:{ 
            type:String, 
            required: true
        },
        created_on:{
            type:Date,
            default:Date.now()
        },
        role:{
            type:String,
            default:"user"
        }
    });


const User = mongoose.model("users",userSchema);

module.exports = User   
