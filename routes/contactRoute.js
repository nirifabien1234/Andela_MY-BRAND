import { Router } from 'express';
import {validateContact} from '../middlewares/contactValidation.js';
const router = Router();
import { allMessages, createMessage, messageDetails, deleteMessage } from '../controllers/contactController.js';

// All Messages
router.get('/', allMessages);

// Create Messages
router.post('/',validateContact, createMessage);

// Post Details
router.get('/:id',messageDetails);

// Delete Messages
router.delete('/:id', deleteMessage);


export default router;