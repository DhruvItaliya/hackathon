import mongoose from 'mongoose';

const driveSchema = new mongoose.Schema({
    food_name:{
        type:String,
        require:true
    },
    no_of_meals:{
        type:Number,
        require:true
    },
    location:{
        type:String,
        require:true
    },
    posted_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true
    },
    consent:{
        type:Boolean,
        require:true,
        default:false
    },
    image:{
        type:String,
        require:true
    }
},{timestamps:true}); 

export const Drives = new mongoose.model('Drives',driveSchema);