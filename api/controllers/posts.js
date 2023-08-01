


const Post = require('../models/post')

module.exports = {
    index,
    create,
    show,
    deletePost,
    edit
}


async function index(req, res){
    try {
        const allPosts = await Post.find({})
        // Sending json data of allPosts
        res.status(200).json(allPosts)
    } catch(err){
        console.log(err)
    }
}

async function show(req, res){
    try {
        const showPost = await Post.findById(req.params.id)
        res.status(200).json(showPost)
    } catch(err){
        console.log(err)
    }
}

async function deletePost(req, res){
    try {
        const deletePost = await Post.findByIdAndDelete(req.params.id)
        res.status(200).json(deletePost)
    } catch(err){
        console.log(err)
    }
}

async function create(req, res){
    try {
        const post = await Post.create(req.body)
        res.status(200).json(post)
    } catch(err){
        console.log(err)
    }
}

async function edit(req, res){
    try {
        const editAfterPost = req.body
        await Post.findByIdAndUpdate(req.params.id, editAfterPost)
        res.status(200).json(editAfterPost)
    } catch(err){
        console.log(err)
    }


}