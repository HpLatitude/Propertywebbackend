require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");
const port = 5006;



app.get("/",(req,res)=>{
    res.status(200).json({message:"server start"})
});

const propertyaddroutes = require("./routes/propertyRoutes");
app.use("/api",propertyaddroutes);


app.listen(port,()=>{
    console.log(`server start at port no ${port}`)
})
