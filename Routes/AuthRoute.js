import express from 'express';
import { registerOrg } from '../Controllers/AuthController.js';

const router = express.Router();

router.post('/registerOrg', registerOrg)

export default router;