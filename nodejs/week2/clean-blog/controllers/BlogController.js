const Blog = require('../models/Blog')

exports.getAllPosts = async (req,res)=>{

    const page = req.query.page || 1;
    const postPerPage = 3;

    const totalPost = await Blog.find().countDocuments();
    const posts = await Blog.find({}).sort('-dateCreated').skip((page-1)*postPerPage).limit(postPerPage);
    res.render("index",{
        posts : posts,
        current: page,
        pages: Math.ceil(totalPost/postPerPage)
    });
    /*

    const posts = await Blog.find({})
    res.render("index",{
        posts
    });*/
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