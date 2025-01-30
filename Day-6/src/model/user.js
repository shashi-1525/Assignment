import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        unique: [true, "User already exists"],
        required: [true, "email is required"],
        match:[/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Should have a valid email address"]
    },
    password:{
        type: String,
        required: [true, "Password is required"],
    },
}, {timestamps: true});

export const User = await mongoose.model('User', userSchema);