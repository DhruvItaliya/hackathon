import express from 'express';
const router = express.Router();
import { reviewPost, joinDrive,myDrives_active, myDrives_inactive, getReviewPost } from '../controllers/volunteerController.js';
import { isAuthenticated } from '../middlewares/auth.js';

//Destructuring body and validationResult
import { body } from 'express-validator';

router.post('/review_post', isAuthenticated, reviewPost);

// we showing active and inactive drives to user 
router.get('/my_drives_active', isAuthenticated, myDrives_active);
router.get('/my_drives_inactive', isAuthenticated, myDrives_inactive);

// from above drives user can join drive 
router.get('/join_drive/:id', isAuthenticated, joinDrive);
router.get('/get_Review_post', isAuthenticated, getReviewPost);

// It is necessary to export module
export default router;
