import express from 'express';
const router = express.Router();
import { getFeed } from '../controllers/woLoginController.js';

router.get('/get_feed', getFeed);

export default router;