import { Router } from 'express';
// import {validatePost} from '../middlewares/postValidation.js';
const router = Router();
import { allComments, createComment, commentDetails, deleteComment } from '../controllers/commentController.js';

// All Projects
router.get('/', allComments);

// Create Projects
router.post('/', createComment);

// Post Details
router.get('/:id',commentDetails);

// Delete Projects
router.delete('/:id', deleteComment);


export default router;