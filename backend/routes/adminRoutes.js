import express from 'express';
const router = express.Router();
import { drivePost, campainPost, getCampaign, myDrives_active, myDrives_inactive } from '../controllers/adminController.js';
import { isAuthenticated } from '../middlewares/auth.js';

//Destructuring body and validationResult
import { body } from 'express-validator';

const storage1 = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, './uploads/admin_drive_images');
    },
    filename: (req, file, cb) => {
        const fileExtension = file.originalname.split('.').pop();
        cb(null, `${"hello"}_${file.fieldname}_${Date.now()}.${fileExtension}`);
    },
});

const upload1 = multer({ storage1 });

const storage2 = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, './uploads/admin_campaign_images');
    },
    filename: (req, file, cb) => {
        const fileExtension = file.originalname.split('.').pop();
        cb(null, `${"hello"}_${file.fieldname}_${Date.now()}.${fileExtension}`);
    },
});

const upload2 = multer({ storage2 });

router.post('/drive_post',upload1.single('image'), [
    //Validation using express-validator
    body('food_name', "Enter valid food_name!").isLength({ min: 3, max: 30 }),
    body('no_of_meals', "Atleast 5 meals required!").isNumeric({ min: 5 }),
], isAuthenticated, drivePost);

router.post('/campaign_post',upload2.single('image'), isAuthenticated, campainPost);
router.get('/get_campaign', isAuthenticated, getCampaign);
router.get('/my_drives_active', isAuthenticated, myDrives_active);
router.get('/my_drives_inactive', isAuthenticated, myDrives_inactive);

export default router;