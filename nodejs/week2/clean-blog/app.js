const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

const ejs = require('ejs');
const Blog = require('./models/Blog');

const port = 5000;

// EXPRESS START
const app = express();

// DB CONNECTION
mongoose.connect('mongodb://localhost/cleanblog-test-db',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// TEMPLATE ENGINE
app.set("view engine","ejs")

// MIDDLEWARE
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOverride('_method',{
    methods:['POST', 'GET']
}))

// ROUTES
app.get('/', async (req,res)=>{
    const posts = await Blog.find({})
    res.render("index",{
        //posts: posts
        posts
    });
})
app.get('/about',(req,res)=>{
    res.render("about");
})
app.get('/add',(req,res)=>{
    res.render("add");
})

app.get('/posts/:id', async (req,res)=>{
    const post = await Blog.findById(req.params.id);
    res.render("post",{
        post
    });
})
app.get('/posts/edit/:id', async (req,res)=>{
    const post = await Blog.findOne({_id: req.params.id});
    res.render("edit",{
        post
    });
})
app.put('/posts/:id', async (req,res)=>{
    const post = await Blog.findOne({_id:req.params.id})
    post.title = req.body.title;
    post.message = req.body.message;
    post.save();

    res.redirect(`/posts/${req.params.id}`);
})

app.delete('/posts/:id', async (req,res) =>{
    await Blog.findByIdAndRemove(req.params.id)
    res.redirect("/");
    
})


app.post('/posts', async (req,res)=>{
    await Blog.create(req.body);
    res.redirect("/");
})




// SERVER
app.listen(port,()=>{
    console.log(`Sunucu ${port} portunda başlatıldı`);
});