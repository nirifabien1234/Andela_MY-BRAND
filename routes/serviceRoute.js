import { Router } from 'express';
// import {validatePost} from '../middlewares/postValidation.js';
const router = Router();
import { allServices, createService, serviceDetails, deleteService, updateService } from '../controllers/serviceController.js';
import authenticate from '../middlewares/authentication.js'

import uploads from '../helpers/multer.js'

// All Projects
router.get('/', allServices);

// Create Projects
router.post('/',  uploads.single('image'), createService);

// Post Details
router.get('/:id',serviceDetails);

// Delete Projects
router.delete('/:id', deleteService);

// Update Projects
router.put('/:id', updateService);

export default router;