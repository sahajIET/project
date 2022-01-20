import PostMessage from "../models/postMessage.js";
import mongoose from 'mongoose';
export const getPost = async (req,res)=>{
    try {
        const postMessages = await PostMessage.find({}) 
        // console.log(postMessages);
        res.status(200).json(postMessages);
    }
    catch(error) {
        res.status(404).json({message : error.message});
    }
    
}

export const createPost = async (req,res)=>{
    const post = req.body;
    try {
        const newPost = new PostMessage(post);
        const result = await newPost.save();
        res.status(201).json(result);
    }catch(error) {
        res.status(409).json({message : error.message});
    }
}

export const updatePost = async(req,res)=>{
    const {id : _id} = req.params;
    const post = req.body;
    try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('NO POST WITH THAT ID');
    }

   const updatedPost= await PostMessage.findByIdAndUpdate(_id,post,{new : true});
   res.json(updatedPost);
} catch(error) {
    res.status(404).json({message : error.message});
}
}

export const deletePost = async(req,res)=>{
    const {id : _id} = req.params;
    try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('NO POST WITH THAT ID FOUND!')
    }
    const deletedPost = await PostMessage.findByIdAndDelete(_id);
    res.json(deletedPost)
}catch(error) {
    res.status(404).json({message : error.message});

}

}