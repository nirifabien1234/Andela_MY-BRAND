import { Router } from 'express';
import authenticate from '../middlewares/authentication.js'
// import {validateCategory} from '../middlewares/postValidation';
const router = Router();
import { allCategory, createCategory, categoryDetails, deleteCategory, updateCategory } from '../controllers/categoryController.js';

// All Categories
router.get('/', allCategory);

// Create Categories
router.post('/', authenticate, createCategory);

// Post Details
router.get('/:id',authenticate, categoryDetails);

// Delete Categories
router.delete('/:id', authenticate, deleteCategory);

// Update Categories
router.put('/:id',authenticate, updateCategory);

export default router;