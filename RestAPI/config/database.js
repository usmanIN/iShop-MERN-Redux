const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();


module.exports = function connect(){
    const database = "Ishop";
    const password = "rrt54TU0krGF4CiP";
    let url = `mongodb+srv://nodeProject:${password}@node-project-cluster.vsvie1z.mongodb.net/?retryWrites=true&w=majority/${database}`;

    mongoose.connect(url, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(function(response){
        console.warn(`Database Connected`);
    }).catch(function(error){
        console.error(error);
    })


    // mongoose.connect(process.env.DATABASE_URL).then(function(response){
    //     console.log(`Database Connected: ${response.connection.host}`);
    // }).catch(function(error){
    //     console.log(error);
    // });
}

// mongodb+srv://nodeProject:<password>@node-project-cluster.vsvie1z.mongodb.net/?retryWrites=true&w=majority

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://nodeProject:<password>@node-project-cluster.vsvie1z.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });