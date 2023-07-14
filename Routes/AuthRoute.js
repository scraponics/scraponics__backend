import express from 'express';
import { loginindUser, loginorg, loginvendor, registerinduser, registerorg, registervendor } from '../Controllers/AuthController.js';

const router = express.Router();

router.post('/signupinduser', registerinduser);
router.post('/logininduser', loginindUser);
router.post('/signuporg', registerorg);
router.post('/loginorg', loginorg);
router.post('/signupvendor', registervendor);
router.post('/loginvendor', loginvendor);

export default router;