import express from 'express';
import { loginindUser, registerinduser } from '../Controllers/AuthController.js';

const router = express.Router();

router.post('/registerinduser', registerinduser);
router.post('/logininduser', loginindUser);

export default router;