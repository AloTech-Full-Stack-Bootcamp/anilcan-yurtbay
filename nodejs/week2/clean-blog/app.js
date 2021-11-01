const express = require('express');
const ejs = require('ejs');
const app = express();
const port = 5000;

// TEMPLATE ENGINE
app.set("view engine","ejs")

// MIDDLEWARE
app.use(express.static('public'))

// ROUTES
app.get('/',(req,res)=>{
    
    res.render("index");
})



// SERVER
app.listen(port,()=>{
    console.log(`Sunucu ${port} portunda başlatıldı`);
});