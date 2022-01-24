import { Router } from 'express';
import {validatePost} from '../middlewares/postValidation.js';
const router = Router();
import { allPosts, createPost, postDetails, deletePost, updatePost } from '../controllers/postController.js';

// All Posts
router.get('/', allPosts);

// Create Posts
router.post('/',validatePost, createPost);

// Post Details
router.get('/:id',postDetails);

// Delete Posts
router.delete('/:id', deletePost);

// Update Posts
router.put('/:id', validatePost, updatePost);

export default router;