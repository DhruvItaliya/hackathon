import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import {VolunteerReview} from "../models/volunteerReviewSchema.js"

export const getFeed = catchAsyncError(async (req, res, next) => {
    const review = await VolunteerReview.find({}).sort({ timestamps: -1 });
    res.status(200).json({
        success: true,
        message: "Fetched successfully",
        review
    });
});