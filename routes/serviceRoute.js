import { Router } from 'express';
// import {validatePost} from '../middlewares/postValidation.js';
const router = Router();
import { allServices, createService, serviceDetails, deleteService, updateService } from '../controllers/serviceController.js';
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

// All Projects
router.get('/', allServices);

// Create Projects
router.post('/', authenticate,createService);

// Post Details
router.get('/:id',serviceDetails);

// Delete Projects
router.delete('/:id', authenticate,deleteService);

// Update Projects
router.put('/:id', authenticate,updateService);

export default router;