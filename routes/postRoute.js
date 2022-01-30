import { Router } from 'express';
import {validatePost} from '../middlewares/postValidation.js';
const router = Router();
import { allPosts, createPost, postDetails, deletePost, updatePost } from '../controllers/postController.js';
import authenticate from '../middlewares/authentication.js'

import uploads from '../helpers/multer.js'
// All Posts
router.get('/', allPosts);

// Create Posts
router.post('/',uploads.single('image'), createPost);

// Post Details
router.get('/:id',postDetails);

// Delete Posts
router.delete('/:id', authenticate,deletePost);

// Update Posts
router.put('/:id',authenticate, validatePost, updatePost);

export default router;