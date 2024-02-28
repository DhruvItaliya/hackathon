import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { User } from "../models/userSchema.js";
import { Drives } from "../models/driveSchema.js";
import { sendToken } from "../utils/jwtToken.js";
import { validationResult } from 'express-validator';

export const reviewPost  = catchAsyncError(async(req, res, next)=>{
    // getting error through validationResult from req object
    const error = validationResult(req);
    const errorMsg = error.array().map(error => error.msg).join('\n');
    if (!error.isEmpty()) {
        return next(new ErrorHandler( errorMsg ,400));
    }
    const {_id,role} = req.user;
    
    if (role !== 'volunteer') {
        return next(
          new ErrorHandler(`You can't post review, you are hotel`, 400)
        );
    }
    const { description, improvements, image }= req.body;
    if( !description || !improvements || !image){
        return next(new ErrorHandler("Please fill all required fields!"));
    }
    const posted_by = _id;
    const review = await VolunteerReview.create({
        drive_for, posted_by, description, improvements, image
    });
    res.status(200).json({
        success: true,
        message: "Review added",
        review
    });
});

export const joinDrive = catchAsyncError(async(req, res, next) => {
    const userId = req.user._id;
    const { id } = req.params;
    console.log(id);
    let drive = await Drives.findById(id);
    console.log(drive);
    if (!drive) {
        return next(new ErrorHandler("OOPS! Drive not found.", 404));
    }
    if (drive.contributed_by.includes(userId)) {
        return next(new ErrorHandler("You have already joined this drive.", 400));
    }

    // Proceed to add the user to the contributed_by array
    drive.contributed_by.push(userId);
    drive.review_post_by.push(false);
    await drive.save();
    res.status(200).json({
        success: true,
        message: "You have successfully joined this drive!",
    });
});