const express=require("express");
const mongoose=require("mongoose");

const app=express();
const port=3000;

mongoose.connect("mongodb://127.0.0.1:27017/COLLEGE",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.error("Failed to connect to MongoDB",err));

const studentSchema=new mongoose.Schema({
    usn:String,
    name:String,
    sem:Number,
    year_of_admission:Number
});

const Student=mongoose.model("Students",studentSchema);

app.use(express.json());
app.post("/student",async(req,res)=>{
    try{
        const studentData=req.body;

        const result=await Student.insertMany(studentData);
        console.log(`Inserted ${result.length} documents into the collection`);

        res.status(201).json({message:`Inserted ${result.length} documents`});

    }catch(err){
        console.error("Error inserting documents:",err);
        res.status(500).json({error:"Error inserting documents"});
    }
});

app.get("/students/search",async(req,res)=>{
    try{
        const partialName=req.query.partialName;

        if(!partialName){
            return res.status(400).json({error:"Partial name is required"});
        }
        const regex=new RegExp(partialName,"i");

        const students=await Student.find({name:{$regex:regex}});
        res.status(200).json(students);
    }catch(err){
        console.error("Error searching for student:",err);
        res.status(500).json({error:"Error Searching for students"});
    }
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});