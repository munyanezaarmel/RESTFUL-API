const express=require('express')
const Blogs= require('../models/BLOGS')
let router=express.Router()
router.get('/',(req, res)=>{
    res.send('you are on blogs')
})
router.post('/', async(req, res)=>{
    const blog=new Blogs({
        title: req.body.title,
        description: req.body.description
    })
    try{
        const savedBlogs=await blog.save()
        res.json(savedBlogs)
    }
    catch(err){
        res.json({message: err})
    }
})
module.exports =router