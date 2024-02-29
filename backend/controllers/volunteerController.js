import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { VolunteerReview } from "../models/volunteerReviewSchema.js";
import { validationResult } from "express-validator";
import { Drives } from "../models/driveSchema.js";

export const reviewPost = catchAsyncError(async (req, res, next) => {
    // getting error through validationResult from req object
    const error = validationResult(req);
    const errorMsg = error.array().map(error => error.msg).join('\n');
    if (!error.isEmpty()) {
        return next(new ErrorHandler(errorMsg, 400));
    }

    const { _id, role } = req.user;

    if (role !== 'volunteer') {
        return next(
            new ErrorHandler(`You can't post review, you are hotel`, 400)
        );
    }
    const { description, improvements, image, for_drive } = req.body;
    const drive = await Drives.findById({ _id: for_drive });
    const userIndex = drive.contributed_by.indexOf(_id);
    if (userIndex === -1) {
        return next(new ErrorHandler("You can't post review for this drive, bcz you didn't participated in it"));
    }else {
        if(drive.review_post_by[userIndex] === false){
            if (!description || !improvements || !image) {
                return next(new ErrorHandler("Please fill all required fields!"));
            }
            const posted_by = _id;
            const review = await VolunteerReview.create({
                for_drive, posted_by, description, improvements, image
            });
            drive.review_post_by[userIndex] = true;
            await drive.save();
            res.status(200).json({
                success: true,
                message: "Review added",
                review
            });
        }else{
            return next(new ErrorHandler("You can't post review for this drive, bcz you uploaded already"));
        }
    }
});

export const joinDrive = catchAsyncError(async (req, res, next) => {
    const { role } = req.user;

    if (role !== 'volunteer') {
        return next(
            new ErrorHandler(`You can't access, you are hotel`, 400)
        );
    }
    const userId = req.user._id;
    const { id } = req.params;
    let drive = await Drives.findById(id);
    if (!drive) {
        return next(new ErrorHandler("OOPS! Drive not found.", 404));
    }
    if (drive.contributed_by.includes(userId)) {
        return next(new ErrorHandler("You have already joined this drive.", 400));
    }
    if(drive.contributed_by.length >= Math.ceil(drive.no_of_meals / 10)){
        return next(new ErrorHandler("Sorry You can't join bcz volunteers already joined it", 400));   
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

export const myDrives_active = catchAsyncError(async (req, res, next) => {
    const { role } = req.user;

    if (role !== 'volunteer') {
        return next(
            new ErrorHandler(`You can't access, you are hotel`, 400)
        );
    }
    const volunteerCity = req.user.city;
    const drives = await Drives.find({ active: true });
    const filteredDrives = await Promise.all(drives.map(async (drive) => {
        const hotel = await User.findById(drive.posted_by);
        if (hotel.city === volunteerCity) return drive;
        return null;
    }));

    const finalDrives = filteredDrives.filter(drive => drive !== null);
    
    res.status(200).json({
        success: true,
        finalDrives,
    });
});

export const myDrives_inactive = catchAsyncError(async (req, res, next) => {
    const { role } = req.user;

    if (role !== 'volunteer') {
        return next(
            new ErrorHandler(`You can't access, you are hotel`, 400)
        );
    }
    const volunteerCity = req.user.city;
    const drives = await Drives.find({ active: false });
    const filteredDrives = await Promise.all(drives.map(async (drive) => {
        const hotel = await User.findById(drive.posted_by);
        if (hotel.city === volunteerCity) return drive;
        return null;
    }));

    const finalDrives = filteredDrives.filter(drive => drive !== null);
    
    res.status(200).json({
        success: true,
        finalDrives,
    });
});

export const getReviewPost = catchAsyncError(async (req, res, next) => {
    const { _id, role } = req.user;
    if (role !== 'volunteer') {
        return next(
            new ErrorHandler(`You can't get campaign details, you are not Volunteer`, 400)
        );
    }
    const volunteerReview = await VolunteerReview.find({posted_by : _id});
    res.status(200).json({
        success: true,
        message: "Fetched successfully",
        volunteerReview
    });
});