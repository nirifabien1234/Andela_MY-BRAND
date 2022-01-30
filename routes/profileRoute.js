import { Router } from 'express';
import {validateProfile} from '../middlewares/profileValidation.js';
import { createProfile, updateProfile, deleteProfile, profileDetails } from '../controllers/profileController.js';
import authenticate from '../middlewares/authentication.js'
const router = Router();
import uploads from '../helpers/multer.js'

router.post('/',validateProfile,uploads.single('image'), createProfile);
router.post('/:id', validateProfile, updateProfile);
router.get('/:id', profileDetails);
router.get('/:id', deleteProfile);

export default router;