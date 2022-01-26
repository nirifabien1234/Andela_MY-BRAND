import { Router } from 'express';
import {validateContact} from '../middlewares/contactValidation.js';
const router = Router();
import authenticate from '../middlewares/authentication.js'
import { allMessages, createMessage, messageDetails, deleteMessage } from '../controllers/contactController.js';

// All Messages
router.get('/', authenticate, allMessages);

// Create Messages
router.post('/',validateContact, createMessage);

// Post Details
router.get('/:id',authenticate,messageDetails);

// Delete Messages
router.delete('/:id',authenticate, deleteMessage);


export default router;