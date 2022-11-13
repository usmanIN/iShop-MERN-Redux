const express = require("express");
const app = express();
const connect = require("./config/database");
const dotenv = require("dotenv");


dotenv.config();
connect();
app.use(express.json());

app.use("/api/auth",require("./routes/auth"));
app.use("/api/user",require("./routes/users"));

app.listen(process.env.PORT || 5000, function(){
    console.log("Backend Server is running");
});