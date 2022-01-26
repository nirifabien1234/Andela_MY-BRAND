import { Router } from 'express';
import { register, login, logout } from '../controllers/userController.js';
import authenticate from '../middlewares/authentication.js'
const router = Router();

router.post('/register',register);
router.post('/login', login);
router.get('/logout', authenticate, logout);

export default router;