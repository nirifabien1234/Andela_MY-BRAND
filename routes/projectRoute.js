import { Router } from 'express';
// import {validatePost} from '../middlewares/postValidation.js';
const router = Router();
import { allProjects, createProject, projectDetails, deleteProject, updateProject } from '../controllers/projectController.js';


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
router.get('/', allProjects);

// Create Projects
router.post('/', createProject);

// Post Details
router.get('/:id',projectDetails);

// Delete Projects
router.delete('/:id', deleteProject);

// Update Projects
router.put('/:id', updateProject);

export default router;