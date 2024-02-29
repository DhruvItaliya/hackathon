import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { VolunteerReview } from "../models/volunteerReviewSchema.js";
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

    if(!req.files){
        new ErrorHandler(`Image could not get`, 400)
    }

    const image = `./uploads/review_post_images/${req.file.filename}`;

    const { description, improvements } = req.body;
    if (!description || !improvements ) {
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