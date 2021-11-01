const Blog = require('../models/Blog')

exports.getAllPosts = async (req,res)=>{
    const posts = await Blog.find({})
    res.render("index",{
        posts
    });
}

exports.getPost = async (req,res)=>{
    const post = await Blog.findById(req.params.id);
    res.render("post",{
        post
    });
}

exports.editPost = async (req,res)=>{
    const post = await Blog.findOne({_id: req.params.id});
    res.render("edit",{
        post
    });
}

exports.createPost = async (req,res)=>{
    await Blog.create(req.body);
    res.redirect("/");
}

exports.updatePost = async (req,res)=>{
    const post = await Blog.findOne({_id:req.params.id})
    post.title = req.body.title;
    post.message = req.body.message;
    post.save();

    res.redirect(`/posts/${req.params.id}`);
}

exports.deletePost = async (req,res) =>{
    await Blog.findByIdAndRemove(req.params.id)
    res.redirect("/");
    
}