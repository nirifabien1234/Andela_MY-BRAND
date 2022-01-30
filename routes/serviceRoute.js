import { Router } from 'express';
// import {validatePost} from '../middlewares/postValidation.js';
const router = Router();
import { allServices, createService, serviceDetails, deleteService, updateService } from '../controllers/serviceController.js';
import authenticate from '../middlewares/authentication.js'

import uploads from '../helpers/multer.js'

// All Projects
router.get('/', allServices);

// Create Projects
router.post('/', authenticate, uploads.single('image'), createService);

// Post Details
router.get('/:id',serviceDetails);

// Delete Projects
router.delete('/:id', authenticate,deleteService);

// Update Projects
router.put('/:id', authenticate,updateService);

export default router;