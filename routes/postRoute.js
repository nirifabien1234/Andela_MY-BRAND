import { Router } from 'express';
import {validatePost} from '../middlewares/postValidation.js';
const router = Router();
import { allPosts, createPost, postDetails, deletePost, updatePost } from '../controllers/postController.js';
import authenticate from '../middlewares/authentication.js'

import multer from 'multer'

const storage = multer.diskStorage({});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb('invalid image file!', false);
  }
};
const uploads = multer({ storage, fileFilter });

// All Posts
router.get('/', allPosts);

// Create Posts
router.post('/', authenticate,uploads.single('image'), createPost);

// Post Details
router.get('/:id',postDetails);

// Delete Posts
router.delete('/:id', authenticate,deletePost);

// Update Posts
router.put('/:id',authenticate, validatePost, updatePost);

export default router;