const express = require("express");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

const users=[];

app.post("/register",async(req,res) =>{
    try{
        const { email,password}=req.body;
        const existingUser = users.find((user)=> user.email === email);
        if(existingUser){
            return req.statusCode(400).send("Email already exists");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        users.push({email,password:hashedPassword});

        res.status(201).send("User registered successfully");
    }catch(error){
        console.error("Error registering user:",error);
        res.status(500).send("Internal server error");
    }
});

app.post("/login",async(req,res)=>{
    try{
        const{ email,password}=req.body;
        const user = user.find ((user) => user.email === email);
        if(!user){
            return res.status(401).send("Invalid credentials");
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if(!passwordMatch){
            return res.status(401).send("Invalid Credentials");
        }

        res.status(200).send("Login successful");
    }catch(error){
        console.error("Error logging in user:", error);
        res.status(500).send("Internal server error");
    }
});

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});