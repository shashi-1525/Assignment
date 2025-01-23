import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        required: true,
        unique: true, 
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please provide a valid email address']
    },
    phone:{
        type: Number,
        unique: true,
        required: true
    }
},
{timeStamps: true}) ;

export const User = mongoose.model('User', userSchema);

