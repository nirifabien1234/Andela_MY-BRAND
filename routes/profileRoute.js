import { Router } from 'express';
import {validateProfile} from '../middlewares/profileValidation.js';
import { createProfile, updateProfile, deleteProfile, profileDetails } from '../controllers/profileController.js';
import authenticate from '../middlewares/authentication.js'
const router = Router();

router.post('/',authenticate,validateProfile, createProfile);
router.post('/:id', authenticate,validateProfile, updateProfile);
router.get('/:id', authenticate,profileDetails);
router.get('/:id', authenticate,deleteProfile);

export default router;