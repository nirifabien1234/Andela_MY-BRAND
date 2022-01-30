import { Router } from 'express';
import authenticate from '../middlewares/authentication.js'
// import {validatePost} from '../middlewares/postValidation.js';
const router = Router();
import { allComments, createComment, commentDetails, deleteComment } from '../controllers/commentController.js';

// All Projects
router.get('/', authenticate, allComments);

// Create Projects
router.post('/', authenticate, createComment);

// Post Details
router.get('/:id',authenticate, commentDetails);

// Delete Projects
router.delete('/:id', authenticate, deleteComment);


export default router;