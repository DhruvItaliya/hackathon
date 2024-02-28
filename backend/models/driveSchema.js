import mongoose from 'mongoose';

const driveSchema = new mongoose.Schema({
    food_name: {
        type: [String],
        required: true
    },
    no_of_meals: {
        type: Number,
        required: true
    },
    posted_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    consent: {
        type: Boolean,
        required: [true, "Please check consent"],
        enum: [true]
    },
    image: {
        type: String,
        required: [true, "Please provide an image"]
    },
    contributed_by: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User', // Reference to the User model
        default: []
    },
    review_post_by: {
        type: [Boolean],
        default: [],
    },
    active: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

export const Drives = new mongoose.model('Drives', driveSchema);