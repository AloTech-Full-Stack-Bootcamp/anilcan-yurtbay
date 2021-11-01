const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

const ejs = require('ejs');
const Blog = require('./models/Blog');
const BlogController = require('./controllers/BlogController')
const PageController = require('./controllers/PageController')

const port = process.env.PORT || 5000;

// EXPRESS START
const app = express();

// DB CONNECTION

mongoose.connect(`mongodb+srv://anil:${process.env.DBKEY}@cluster0.7m2pp.mongodb.net/blog-db?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Success")
}).catch((err)=>{
    console.log(err)
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
app.get('/', BlogController.getAllPosts)
app.get('/about',PageController.getAboutPage)
app.get('/add', PageController.getAddPage)

app.get('/posts/:id', BlogController.getPost)
app.get('/posts/edit/:id', BlogController.editPost)

app.post('/posts', BlogController.createPost)
app.put('/posts/:id', BlogController.updatePost)
app.delete('/posts/:id', BlogController.deletePost)







// SERVER
app.listen(port,()=>{
    console.log(`Sunucu ${port} portunda başlatıldı`);
});