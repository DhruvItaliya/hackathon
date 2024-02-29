import express from 'express';
const router = express.Router();
import { drivePost, campainPost, getCampaign, myDrives_active, myDrives_inactive } from '../controllers/adminController.js';
import { isAuthenticated } from '../middlewares/auth.js';

//Destructuring body and validationResult
import { body } from 'express-validator';

router.post('/drive_post', [
    //Validation using express-validator
    body('food_name', "Enter valid food_name!").isLength({ min: 3, max: 30 }),
    body('no_of_meals', "Atleast 5 meals required!").isNumeric({ min: 5 }),
], isAuthenticated, drivePost);

router.post('/campaign_post', isAuthenticated, campainPost);
router.get('/get_campaign', isAuthenticated, getCampaign);
router.get('/my_drives_active', isAuthenticated, myDrives_active);
router.get('/my_drives_inactive', isAuthenticated, myDrives_inactive);

export default router;