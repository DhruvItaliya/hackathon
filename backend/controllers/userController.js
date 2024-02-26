import { catchAsyncError } from "../middleware/catchAsyncError.js";
import ErrorHandler from "../middleware/error.js";
import { User } from "../models/userSchema.js";
import { sendToken } from "../utils/jwtToken.js";

export const userRegister  = catchAsyncError(async(req, res, next)=>{
    const { role, name, mobile, email, age, city, password }= req.body;
    if( !role || !name || !mobile|| !email || !password || !city){
        return next(new ErrorHandler("Please fill full registration form"));
    }
    const isEmail = await User.findOne({email});
    if(isEmail) {
        return next(new ErrorHandler("Email.already Exists"));
    }
    const user = await User.create({
        role, name, mobile, email, age, city, password
    });
    res.status(200).json({
        success: true,
        message: "User Registered Successfully",
        user
    });
    // sendToken(user, 200, res, "User Registered Successfully");
});

export const userLogin = catchAsyncError(async(req, res, next)=>{
    const { role, email, password} = req.body;
    if(!role || !email || !password){
        return next(new ErrorHandler("Please Provide Role, Email and Password",400));
    }
    const user = await User.findOne({email}).select("+password");
    if(!user){
        return next(new ErrorHandler("Invalid Email and Password",400));
    }
    const isPasswordMatched = await user.comparePassword(password);
    if( !isPasswordMatched ) {
        return next(new ErrorHandler("Invalid Email and Password",400))
    }
    if (user.role !== role) {
        return next(
          new ErrorHandler(`User with provided email and ${role} not found!`, 404)
        );
    }
    sendToken(user, 200, res,"Logged In Successfully")
});

export const userLogout = catchAsyncError(async(req, res, next)=>{
    res.status(201).cookie("token", "", {
        httpOnly: true,
        expires: new Date(Date.now()),
    }).json({
        success: true,
        message: "User Logged Out Successfully"
    })
})

export const getUser = catchAsyncError(async(req, res, next) => {
    const user = req.user;
    res.status(200).json({
        success: true,
        user,
    });
});