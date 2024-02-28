import mongoose from 'mongoose';

const volunteerReviewSchema = new mongoose.Schema({
    for_drive: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Drives"
    },
    posted_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    description:{
        type:String,
        require:[true,"Your Description will be very helpfu to join other joinees"],
        minLength: [20, "Description must be of 20 characters"],
        enum:[true]
    },
    improvements:{
        type: String,
    },
    image:{
        type:String,
        require:[true,"Please provide an image"]
    }
},{timestamps:true}); 

export const VolunteerReview = new mongoose.model('volunteerReview',driveSchema);