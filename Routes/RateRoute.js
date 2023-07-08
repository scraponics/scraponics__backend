import express from 'express';
import { getScrapData, postScrapData } from '../Controllers/RateController.js';

const router = express.Router();

router.post('/post', postScrapData);
router.post('/get', getScrapData);

export default router;