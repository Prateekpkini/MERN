const fs = require("fs");
//Create
const createFile = (fileName,data)=>{
    fs.writeFile(fileName,data,(err)=>{
        if(err){
            console.error("Error creating file:",err);
        }else{
            console.log("File Created Successfully");
        }
    });
};
createFile("example.txt","This is a sample text file. ");

//Read
const readFile=(fileName)=>{
    fs.readFile(fileName,"utf8",(err,data)=>{
        if(err){
            console.error("Error reading file:",err);
        }else{
            console.log("File content:");
            console.log(data);
        }
    });
};
readFile("example.txt");

//Update 
const updateFile = (fileName, _newData)=>{
    fs.writeFile(fileName,_newData,(err)=>{
        if(err){
            console.error("Error creating file:",err);
        }else{
            console.log("File updated Successfully");
        }
    });
};
updateFile("example.txt","This is updated content. ");

//delete
const deleteFile=(fileName)=>{
    fs.unlink(fileName,(err)=>{
        if(err){
            console.error("Error deleting File: ",err);
        }else{
            console.log("File deleted successfully.");
        }
    });
};
deleteFile("example.txt");