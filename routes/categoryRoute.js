import { Router } from 'express';
// import {validateCategory} from '../middlewares/postValidation';
const router = Router();
import { allCategory, createCategory, categoryDetails, deleteCategory, updateCategory } from '../controllers/categoryController.js';

// All Categories
router.get('/', allCategory);

// Create Categories
router.post('/', createCategory);

// Post Details
router.get('/:id',categoryDetails);

// Delete Categories
router.delete('/:id', deleteCategory);

// Update Categories
router.put('/:id', updateCategory);

export default router;