import mongoose from 'mongoose';

const driveSchema = new mongoose.Schema({
    food_name:{
        type:[String],
        require:true
    },
    no_of_meals:{
        type:Number,
        require:true
    },
    posted_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true
    },
    consent:{
        type:Boolean,
        require:[true,"Please check consent"],
        enum:[true]
    },
    image:{
        type:String,
        require:[true,"Please provide an image"]
    },
    contributed_by:{
        type:[mongoose.Schema.Types.ObjectId],
        ref: 'User', // Reference to the User model
        default:[]
    },
    active:{
        type:Boolean,
        default:true
    }
},{timestamps:true}); 

export const Drives = new mongoose.model('Drives',driveSchema);