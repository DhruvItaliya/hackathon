import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { User } from "../models/userSchema.js";
import { sendToken } from "../utils/jwtToken.js";
import { validationResult } from 'express-validator';
import {OTP} from "../models/otpSchema.js";
import nodemailer from 'nodemailer';

export const userRegister = catchAsyncError(async (req, res, next) => {
    // getting error through validationResult from req object
    const error = validationResult(req);
    const errorMsg = error.array().map(error => error.msg).join('\n');
    if (!error.isEmpty()) {
        return next(new ErrorHandler(errorMsg, 400));
    }
    const { role, name, mobile, email, age, address, pincode, city, password, otp } = req.body;
    if (!role || !name || !mobile || !email || !password || !city || !otp) {
        return next(new ErrorHandler("Please fill full registration form"));
    }
    const isEmail = await User.findOne({ email });
    if (isEmail) {
        return next(new ErrorHandler("Email already Exists"));
    }

    const otpDoc = await OTP.findOne({ email });
    if (!otpDoc) {
        return next(new ErrorHandler("OTP not found"));
    }
    // Verify OTP value
    if (otp !== otpDoc.otpValue) {
        return next(new ErrorHandler("Invalid OTP"));
    }
    // Verify OTP expiry time (optional, depending on your requirements)
    if (otpDoc.expiryTime < Date.now()) {
        return next(new ErrorHandler("OTP expired"));
    }

    const user = await User.create({
        role, name, mobile, email, age, address, pincode, city, password
    });
    res.status(200).json({
        success: true,
        message: "User Registered Successfully",
        user
    });

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'hppappu03@gmail.com',
            pass: 'khhe pivx joni scqq'
        }
    });
    const mailOptions = {
        from: 'hppappu03@gmail.com',
        to: email,
        subject: 'Welcome to Our NGO Community!',
        text: `Dear ${name},
        
        Welcome to our NGO community! We are delighted to have you join us in our mission to make a positive impact on the lives of those in need. Your registration marks the beginning of a journey towards creating a better world together.
        
        As a member of our NGO, you will play a vital role in supporting our initiatives, whether it's through volunteering, donations, or spreading awareness. Together, we can make a meaningful difference in the lives of the underprivileged and marginalized communities.
        
        Thank you for choosing to be a part of our noble cause. We look forward to working with you and creating lasting change.
        
        Best regards,
        Meal Mission`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return next(new ErrorHandler('Failed to send mail'));
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
});

export const userLogin = catchAsyncError(async (req, res, next) => {
    // getting error through validationResult from req object
    const error = validationResult(req);
    const errorMsg = error.array().map(error => error.msg).join('\n');
    if (!error.isEmpty()) {
        return next(new ErrorHandler(errorMsg, 400));
    }
    const { role, email, password } = req.body;
    if (!role || !email || !password) {
        return next(new ErrorHandler("Please Provide Role, Email and Password", 400));
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        return next(new ErrorHandler("Invalid Email or Password", 400));
    }
    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) {
        return next(new ErrorHandler("Invalid Email or Password", 400))
    }
    if (user.role !== role) {
        return next(
            new ErrorHandler(`User with provided email and role not found!`, 404)
        );
    }
    sendToken(user, 200, res, "Logged In Successfully")
});

export const userLogout = catchAsyncError(async (req, res, next) => {
    res.status(201).cookie("token", "", {
        httpOnly: true,
        expires: new Date(Date.now()),
    }).json({
        success: true,
        message: "User Logged Out Successfully"
    })
})

export const getUser = catchAsyncError(async (req, res, next) => {
    // const user = req.user;
    const id = req.params.id;

    const user = await User.findById({_id:id},"name role badge point email mobile city age");
    if(user){

        res.status(200).json({
            success: true,
            user,
        });
    }
    else {
        res.status(404).json({msg:"Cannot find user"});
    }
});