const fs = require('fs');


function start(){
    createFolder();
}

function createFolder(){
    fs.mkdir('odev',{recursive:true},(err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log("Klasör oluşturuldu..");
    })
    setTimeout(() => {
        createFile();
    }, 1000);
    
}

function createFile(){
    fs.writeFile('odev/employees.json','{"name": "Employee 1 Name", "salary": 2000}','utf8',(err)=>{
        if(err){
            console.log(err);  
            return;
        } 
        console.log("Dosya oluşturuldu..");
    })
    setTimeout(() => {
        readFile();
    }, 1000);
}

function readFile(){
    fs.readFile('odev/employees.json','utf8',(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(data);
    });
    setTimeout(() => {
        updateFile();
    }, 1000);
}

function updateFile(){
    fs.appendFile('odev/employees.json','{"name": "Employee 2 Name", "salary": 3000}','utf8',(err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log("Dosya güncellendi..");
    });
    setTimeout(() => {
        deleteFile();
    }, 1000);
}

function deleteFile(){
    fs.unlink('odev/employees.json',(err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log("Dosya silindi..");
    });
    setTimeout(() => {
        deleteFolder();
    }, 1000);
}

function deleteFolder(){
    fs.rmdir('odev',{recursive:true},(err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log("Klasör silindi..");
    })
}




start();