import { Router } from 'express';
// import {validatePost} from '../middlewares/postValidation.js';
const router = Router();
import { allProjects, createProject, projectDetails, deleteProject, updateProject } from '../controllers/projectController.js';
import authenticate from '../middlewares/authentication.js'

import uploads from '../helpers/multer.js'

// All Projects
router.get('/', allProjects);

// Create Projects
router.post('/', uploads.single('image'),createProject);

// Post Details
router.get('/:id',projectDetails);

// Delete Projects
router.delete('/:id', deleteProject);

// Update Projects
router.put('/:id', updateProject);

export default router;