import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    emp_id:{
        type: Number,
        min: 10000,
        max: 99999,
        required: [true, "Employee Required"],
    },
    first_name:{
        type: String,
        required: [true, "First Name Required"],
    },
    last_name:{
        type: String,
        required: [true, "Last Name Required"],
    },
    gender:{
        type: String,
        required: [true, "Gender Required"],
    },
    phone: {
        type: Number,
        required: [true, "Phone Required"],
        match:['^\\d{3}-\\d{3}-\\d{4}$\n', "Should have a valid phone number"],
    },
    city: {
        type: String,
        required: [true, "City Required"],
    },
    salary: {
        type: Number,
    },
    designation: {
        type: String,
        required: [true, "Designation Required"],
    },
    email: {
        type: String,
        required: [true, "Email Required"],
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Should have a valid email address"],
    },
    date_of_joining: {
        type: Date,
        required: [true, "Date of Joining Date"],
    },

},
    {timestamps: true});

export const Employee = mongoose.model("Employee", employeeSchema);