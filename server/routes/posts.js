import express from "express";
import { likePost,createPost, getPost, updatePost, deletePost } from "../controllers/posts.js";
const router = express.Router();

router.get('/', getPost);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/like', likePost);
export default router;