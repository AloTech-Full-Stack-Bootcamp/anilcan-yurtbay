const express = require('express');
const mongoose = require('mongoose');

const ejs = require('ejs');
const Blog = require('./models/Blog');

const port = 5000;

// EXPRESS START
const app = express();

// DB CONNECTION
mongoose.connect('mongodb://localhost/cleanblog-test-db',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

// TEMPLATE ENGINE
app.set("view engine","ejs")

// MIDDLEWARE
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// ROUTES
app.get('/', async (req,res)=>{
    const posts = await Blog.find({})
    res.render("index",{
        posts: posts
        //posts
    });
})
app.get('/about',(req,res)=>{
    res.render("about");
})
app.get('/add',(req,res)=>{
    res.render("add");
})

app.post('/posts', async (req,res)=>{
    await Blog.create(req.body);
    res.redirect("/");
})




// SERVER
app.listen(port,()=>{
    console.log(`Sunucu ${port} portunda başlatıldı`);
});