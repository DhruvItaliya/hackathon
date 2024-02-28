import express from 'express';
const router = express.Router();
import { reviewPost, joinDrive } from '../controllers/volunteerController.js';
import { isAuthenticated } from '../middlewares/auth.js';

//Destructuring body and validationResult
import { body } from 'express-validator';

router.post('/review_post', [
    //Validation using express-validator
], reviewPost);

router.get('/join_drive/:id', isAuthenticated, joinDrive);

// It is necessary to export module
export default router;
