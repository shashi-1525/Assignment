import mongoose from 'mongoose';

const userDetailsSchema = new mongoose.Schema({
    user:{
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, "User Id required."]
    },
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    address:{
        type: String,
        required: [true, "Address is required"],
    },
    occupation:{
        type: String,
        required: [true, "Occupation is required"],
    }
}, {timestamps: true});

export const UserDetails = await mongoose.model('UserDetails', userDetailsSchema);