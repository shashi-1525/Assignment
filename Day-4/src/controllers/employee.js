import {Employee} from "../models/employee.js";
import e from "express";

// create employee
export const createEmployee = async (req, res) => {
    console.log("create employee...");
    try{
        const employee = req.body;
        const newEmployee = new Employee(employee);
        const createdEmployee = await newEmployee.save();
        res.send(createdEmployee);
    }
    catch(err){
        console.error("Error creating new employee: " + err.message);
    }
}


// get employee using filters
export const getEmployee = async (req, res) => {
    console.log("Get Employee using filters=....");
    try{
        const {first_name, last_name, email, gender, city, state, designation} = req.query;
        let filters = {};

        if(first_name)  filters.first_name = first_name;
        if(last_name)   filters.last_name = last_name;
        if(email)   filters.email = email;
        if(gender)  filters.gender = gender;
        if(city)    filters.city = city;
        if(state)   filters.state = state;
        if(designation) filters.designation = designation;

        const employees = await Employee.find(filters);
        console.log(employees);
        if(employees){
            return res.render('get_employee_by_filter.pug', {
                employees: employees,
                filters: filters
            });

            // return res.send({
            //     "message": "Employees fetched",
            //     "employees": employees
            // });
        }
    }
    catch(err){
        return res.send({
            "message": "Error fetching Employee using filters...",
            "error": err.message
        })
    }
}

// using regex in dynamic routing
export const getEmployeeByEmail = async (req, res) => {
    console.log("Get Employee using email....");
    try{
        const { email } = req.params;

        const employees = await Employee.findOne({email});
        console.log(employees);
        if(employees){
            return res.render('get_employee_by_email.pug', {employee: employees, email: email} );
            // return res.send({
            //     "message": "Employees fetched with email",
            //     "employees": employees
            // });
        }
    }
    catch(err){
        return res.send({
            "message": "Error fetching Employee using filters...",
            "error": err.message
        })
    }
}