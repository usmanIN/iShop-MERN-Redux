const mongoose =  require("mongoose");
const URL =  "mongodb://localhost:27017/iShop";

module.exports = function dbConnect(){
    mongoose.connect(URL).then((response) =>{
        console.log(`Database Connected: ${response.connection.host}`);
        
    }).catch(error => {
        console.log(error);
    })
       
}