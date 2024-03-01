import mongoose from 'mongoose';

const contactUsSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please Provide Your Email"],
        validate: [validator.isEmail, "Please Provide a Valid Email"]
    },
    queries: {
        type: String,
        required: [true, "Please Provide Your Query"],
    },
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        unique: true,
        required: [true, "Please Provide Mobile no."],
        validate: {
            validator: function (v) {
                return validator.isMobilePhone(v, 'en-IN');
            },
            message: "Invalid Mobile number"
        }
    },
    company: {
        type: String
    }
}, { timestamps: true });

export const contactUs = new mongoose.model('contactUs', contactUsSchema);