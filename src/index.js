const express = require("express");
const bodyParser = require("body-parser");
const route = require("./route/routes");
const {default: mongoose } =require("mongoose");
const app = express();

app.use (bodyParser.json());

// let url = "mongodb+srv://project1-blog:ucDww7V0InVFB9oF@blog.y7qnwco.mongodb.net/?retryWrites=true&w=majority" ;
let port = process.env.PORT || 3000;

// mongoose.connect(url,{userNewUrlParser: true})
//  .then(()=> console.log("MongoDb is connected"))
//  .catch((err) => console.log(err));

 app.use("/",route);

 app.listen(port, function(){
    console.log("Express app running on port " + port);
 });
