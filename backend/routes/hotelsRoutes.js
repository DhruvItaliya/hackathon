import express from 'express';
const router = express.Router();
import { drivePost, myDrives_active, myDrives_inactive } from '../controllers/hotelsController.js';
import { isAuthenticated } from '../middlewares/auth.js';

//Destructuring body and validationResult
import { body } from 'express-validator';


router.post('/drive_post', [
    //Validation using express-validator
    body('food_name', "Enter valid food_name!").isLength({ min: 3, max: 30 }),
    body('no_of_meals', "Atleast 5 meals required!").isNumeric({ min: 5 }),
], isAuthenticated, drivePost);


router.get('/my_drives_active', isAuthenticated, myDrives_active);
router.get('/my_drives_inactive', isAuthenticated, myDrives_inactive);

// router.get('/active_drives', isAuthenticated, activeDrives);

// It is necessary to export module
export default router;
