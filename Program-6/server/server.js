const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const app=express();
const PORT=5000;

app.use(bodyParser.json());
app.use(cors());
app.post("/api/fruits",(req,res)=>{
    const {name,price}=req.body;
    console.log(`Recieved data from client:Name-${name},Price-${price}`);
    res.status(200).send("Data received successfully");
});

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});