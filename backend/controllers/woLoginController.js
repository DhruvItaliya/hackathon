import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import {VolunteerReview} from "../models/volunteerReviewSchema.js"
import {User} from "../models/userSchema.js";

export const getFeed = catchAsyncError(async (req, res, next) => {
    const review = await VolunteerReview.find({}).sort({ timestamps: -1 });
    res.status(200).json({
        success: true,
        message: "Fetched successfully",
        review
    });
});

export const getUsers = catchAsyncError(async (req, res, next) => {
    const user = await User.find({}).sort({ ndrive : -1 });
    res.status(200).json({
        success: true,
        message: "Users fetched successfully!",
        user,
    });
});

export const postContact = catchAsyncError(async(req, res, next) => {
    const { email, queries, fname, lname, mobile, company } = req.body;
    if(!email || !queries || !fname || !lname || !mobile){
        return next(new ErrorHandler("Please fill all required fields!"));
    }
    const contactUs = await contactUs.create({
        email, queries, fname, lname, mobile, company
    });
    res.status(200).json({
        success: true,
        message: "We will Contact you shortly",
        drive
    });
});