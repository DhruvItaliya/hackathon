import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { VolunteerReview } from "../models/volunteerReviewSchema.js";
import { Drives } from "../models/driveSchema.js";

export const reviewPost  = catchAsyncError(async(req, res, next)=>{
    const {_id,role} = req.user;
    const {drive_id} = req.params;
    // as we are sending all active and completed drive details as per volunteer city in frontend. so we are providing option for posting drive review from that data only so we are not creating route for that in backend
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
    const drive_for = drive_id;
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
    let drive = await Drives.findById(id);
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
        drive
    });
});