import { Router } from 'express';
import {validateProfile} from '../middlewares/profileValidation.js';
import { createProfile, updateProfile, deleteProfile, profileDetails } from '../controllers/profileController.js';

const router = Router();

router.post('/',validateProfile, createProfile);
router.post('/:id', validateProfile, updateProfile);
router.get('/:id', profileDetails);
router.get('/:id', deleteProfile);

export default router;