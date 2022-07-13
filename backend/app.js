const express = require("express");
const app = express();
const dbConnect = require("./config/database");
const routes = require("./routes/allRoutes");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use("/api",routes);


dbConnect();

const port = process.env.PORT || 8000;
app.listen(port, () => {    
    console.log(`Application has started running successfully at port ${port}`);    
})