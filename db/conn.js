const mongoose = require("mongoose");

const DB = process.env.DATABASE

mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=>console.log("DataBase Connected")).catch((error)=>console.log("error",error));